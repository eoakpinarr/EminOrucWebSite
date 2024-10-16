import React, { useEffect, useState } from 'react';
import { db } from '../../firebase'; // Firebase ayarlarını içeren dosya
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const articlesCollection = collection(db, 'articles');
      const articlesSnapshot = await getDocs(articlesCollection);
      const articlesList = articlesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articlesList);
    };

    fetchArticles();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'articles', id));
      setArticles(articles.filter(article => article.id !== id));
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  };

  return (
    <div className="article-list-container">
      <h1>Makale Listesi</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.shortText}</p>
            <button onClick={() => handleEdit(article.id)}>Düzenle</button>
            <button onClick={() => handleDelete(article.id)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
