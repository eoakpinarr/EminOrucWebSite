import React, { useState } from 'react';
import { db } from '../../firebase'; // Firebase ayarlarını içeren dosya
import { collection, addDoc } from 'firebase/firestore';
import ReactQuill from 'react-quill';
import Select from 'react-select';
import 'react-quill/dist/quill.snow.css'; // React Quill stillerini içe aktar
import './CreateArticles.css'; // Stil dosyasını dahil et

const CreateArticle = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [author, setAuthor] = useState(null);
  const [category, setCategory] = useState(null);
  const [shortText, setShortText] = useState('');
  const [longText, setLongText] = useState('');
  const [image, setImage] = useState(null);

  const authors = [
    { value: 'Av. Muhammed Emin ORUÇ', label: 'Av. Muhammed Emin ORUÇ' },
    // Diğer yazarlar...
  ];

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

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // İlk paragrafı almak için longText'ten metni böl
      const firstParagraph = longText.split('</p>')[0] + '</p>'; // İlk paragrafı al

      // İlk paragrafı düz metin haline getirmek için DOMParser kullan
      const parser = new DOMParser(); // DOMParser nesnesini oluştur
      const doc = parser.parseFromString(firstParagraph, 'text/html'); // HTML içeriğini analiz et
      const plainText = doc.body.textContent || ""; // Düz metin olarak al

      // Kısa metin olarak ayarla
      setShortText(plainText);

      const docRef = await addDoc(collection(db, 'articles'), {
        title,
        date,
        author: author.value,
        category: category.value,
        shortText: plainText, // Kısa metin olarak ilk paragrafı ekle
        longText,
        imageURL: image ? URL.createObjectURL(image) : null, // Resmi yüklemek için
      });

      console.log('Document written with ID: ', docRef.id);
      // Formu sıfırlama
      setTitle('');
      setDate('');
      setAuthor(null);
      setCategory(null);
      setShortText('');
      setLongText('');
      setImage(null);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <div className="create-article-container">
      <h1>Makale Oluştur</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Makale Başlığı" 
          required 
          className="input-field"
        />
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          required 
          className="input-field"
        />
        <Select 
          options={authors} 
          value={author} 
          onChange={setAuthor} 
          placeholder="Yazar Seçiniz" 
          isClearable 
          required 
          styles={{
            container: (base) => ({
              ...base,
              width: '100%',
            }),
          }}
          className="select-field"
        />
        <Select 
          options={categories} 
          value={category} 
          onChange={setCategory} 
          placeholder="Kategori Seçiniz" 
          isClearable 
          required 
          styles={{
            container: (base) => ({
              ...base,
              width: '100%',
            }),
          }}
          className="select-field"
        />

        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageChange} 
          placeholder="Fotoğraf Ekle" 
          className="input-field"
        />
        
        {/* React Quill alanı */}
        <div className="quill-container">
          <ReactQuill 
            value={longText} 
            onChange={setLongText} 
            modules={{
              toolbar: [
                [{ header: [1, 2, false] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [
                  { list: 'ordered' },
                  { list: 'bullet' },
                  { indent: '-1' },
                  { indent: '+1' },
                ],
                ['link', 'image'],
                ['clean'],
              ],
            }}
            className="react-quill"
          />
        </div>

        <button type="submit" className="submit-button">Oluştur</button>
      </form>
    </div>
  );
};

export default CreateArticle;
