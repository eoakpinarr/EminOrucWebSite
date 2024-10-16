import React, { useState, useEffect } from 'react';
import './BlogPage.css';
import Categories from '../../components/Admin/Categories';
import Articles from './Articles';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase'; // Adjust the import path as needed
import loginImage from '../../assets/images/login.png'

function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tüm Makaleler');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [user, setUser] = useState(null);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(currentUser => {
      setUser(currentUser);
    });

    window.addEventListener('resize', handleResize);
    return () => {
      unsubscribe();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="blog-page-container">
      <div className="header">
        {user ? (
          <>
            <Link to="/create" className="create-article-button">
              <i className="fas fa-plus"></i> {/* Font Awesome icon for new article */}
            </Link>
            <button className="logout-button" onClick={() => auth.signOut()}>
              <i className="fas fa-sign-out-alt"></i> {/* Font Awesome icon for logout */}
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <img src={loginImage} alt="Giriş Yap" width={50} height={50} /> {/* Giriş simgesi */}
            </Link>
          </>
        )}
      </div>

      {/* Display categories for desktop */}
      {!isMobile && (
        <div className="left-panel">
          <Categories onSelectCategory={handleSelectCategory} />
        </div>
      )}

      {/* Dropdown for mobile */}
      {isMobile && (
        <div className="category-select">
          <select
            value={selectedCategory}
            onChange={(e) => handleSelectCategory(e.target.value)}
          >
            <option value="Tüm Makaleler">Tüm Makaleler</option>
            <option value="Ceza Hukuku">Ceza Hukuku</option>
            <option value="Aile Hukuku">Aile Hukuku</option>
            <option value="Miras Hukuku">Miras Hukuku</option>
            <option value="Gayrimenkul Hukuku">Gayrimenkul Hukuku</option>
            <option value="Ticaret Hukuku">Ticaret Hukuku</option>
            <option value="İdare Hukuku">İdare Hukuku</option>
            <option value="İş Hukuku">İş Hukuku</option>
            <option value="İcra Hukuku">İcra Hukuku</option>
            <option value="Araç Değer Kaybı">Araç Değer Kaybı</option>
          </select>
        </div>
      )}

      <div className="right-panel">
        <Articles selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}

export default BlogPage;