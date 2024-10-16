import React, { useEffect, useState } from 'react';
import { db, auth } from '../../firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { Link } from 'react-router-dom';
import './Articles.css';

const Articles = ({ selectedCategory }) => {
  const [articles, setArticles] = useState([]);
  const [user, setUser] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const fetchArticles = async () => {
      const articlesCollection = collection(db, 'articles');
      const articleSnapshot = await getDocs(articlesCollection);
      const articleList = articleSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setArticles(articleList);
    };

    fetchArticles();

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'articles', id));
      setArticles(articles.filter(article => article.id !== id));
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  };

  const filteredArticles =
    selectedCategory === 'Tüm Makaleler'
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  const getShortContent = (content) => {
    return isMobile && content.length > 100 ? `${content.substring(0, 120)}...` : content;
  };

  return (
    <div className="articles-container">
      <div className="article-list">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <div key={article.id} className="article-item">
              <div className="article-header">
                <b>{article.title}</b>
              </div>
              <p>Kategori: {article.category}</p>
              <p className="article-date">{article.date} / {article.author}</p>
              <p className="article-content">{getShortContent(article.shortText)}</p>
              <Link to={`/article/${article.id}`} className="read-more">Devamını Oku</Link>
              
              {/* Düzenle ve Sil butonları sadece oturum açmış kullanıcılar tarafından görülebilir */}
              {user && (
                <div className={`action-buttons ${isMobile ? 'mobile-buttons' : 'desktop-buttons'}`}>
                  <Link to={`/edit/${article.id}`} className="edit-button">Düzenle</Link>
                  <button onClick={() => handleDelete(article.id)} className="delete-button">Sil</button>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>Bu kategoride henüz makale bulunmamaktadır.</p>
        )}
      </div>
    </div>
  );
};

export default Articles;
