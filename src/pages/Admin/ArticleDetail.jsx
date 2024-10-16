import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db, auth } from '../../firebase';
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import ReactQuill from 'react-quill';
import Select from 'react-select';
import './ArticleDetail.css';
import 'react-quill/dist/quill.snow.css';

const categories = [
  { value: 'Ceza Hukuku', label: 'Ceza Hukuku' },
  { value: 'Aile Hukuku', label: 'Aile Hukuku' },
  { value: 'Miras Hukuku', label: 'Miras Hukuku' },
  { value: 'Gayrimenkul Hukuku', label: 'Gayrimenkul Hukuku' },
  { value: 'Ticaret Hukuku', label: 'Ticaret Hukuku' },
  { value: 'İdare Hukuku', label: 'İdare Hukuku' },
  { value: 'İş Hukuku', label: 'İş Hukuku' },
  { value: 'İcra Hukuku', label: 'İcra Hukuku' },
  { value: 'Araç Değer Kaybı', label: 'Araç Değer Kaybı' }
];

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [author, setAuthor] = useState(null);
  const [shortText, setShortText] = useState('');
  const [longText, setLongText] = useState('');
  const [category, setCategory] = useState(null);
  const [user, setUser] = useState(null);

  const authors = [
    { value: 'Av. Muhammed Emin ORUÇ', label: 'Av. Muhammed Emin ORUÇ' },
    // Add more authors here if needed
  ];

  useEffect(() => {
    const fetchArticle = async () => {
      const docRef = doc(db, 'articles', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setArticle(data);
        setTitle(data.title);
        setDate(data.date);
        setAuthor({ value: data.author, label: data.author });
        setShortText(data.shortText);
        setLongText(data.longText);
        setCategory({ value: data.category, label: data.category });
      } else {
        console.log('No such document!');
      }
    };

    fetchArticle();

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const docRef = doc(db, 'articles', id);
      await updateDoc(docRef, {
        title,
        date,
        author: author.value,
        shortText,
        longText,
        category: category.value,
      });
      setIsEditing(false);
      const updatedDocSnap = await getDoc(docRef);
      setArticle(updatedDocSnap.data());
    } catch (e) {
      console.error('Error updating document: ', e);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Makale silinsin mi?')) {
      try {
        const docRef = doc(db, 'articles', id);
        await deleteDoc(docRef);
        navigate('/blog');
      } catch (e) {
        console.error('Error deleting document: ', e);
      }
    }
  };

  if (!article) return <div>Yükleniyor...</div>;

  return (
    <div className="article-detail-container">
      <h1>{isEditing ? 'Makale Düzenle' : article.title}</h1>
      <p className="article-date">{article.date} / {article.author}</p>

      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Makale Başlığı"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <Select
            options={authors}
            value={author}
            onChange={setAuthor}
            placeholder="Yazar Seçiniz"
            isClearable
            required
          />
          <Select
            options={categories}
            value={category}
            onChange={setCategory}
            placeholder="Kategori Seçiniz"
            isClearable
            required
          />
          <input
            type="text"
            value={shortText}
            onChange={(e) => setShortText(e.target.value)}
            required
            placeholder="Kısa Metin"
          />
          <ReactQuill
            value={longText}
            onChange={setLongText}
            modules={{ toolbar: [] }}
            placeholder="Makalenin Uzun Hali"
          />
          <div className="button-container">
            <button type="submit" className="update-button">Güncelle</button>
            <button type="button" onClick={() => setIsEditing(false)} className="cancel-button">İptal</button>
          </div>
        </form>
      ) : (
        <div className="article-content">
          <p>{article.shortText}</p>
          <div dangerouslySetInnerHTML={{ __html: article.longText }} />
          {article.image && <img src={article.image} alt={article.title} className="article-image" />}
          {user && (
            <div className="buttons-container">
              <button onClick={() => setIsEditing(true)} className="edit-button">Düzenle</button>
              <button onClick={handleDelete} className="delete-button">Sil</button>
            </div>
          )}
          <a href="/blog" className="back-button">Geri Dön</a>
        </div>
      )}
    </div>
  );
};

export default ArticleDetail;