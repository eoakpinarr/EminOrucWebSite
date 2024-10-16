import React, { useState } from 'react';
import './Categories.css';

const Categories = ({ onSelectCategory }) => {
  const categories = [
    'Tüm Makaleler',
    'Ceza Hukuku',
    'Aile Hukuku',
    'Miras Hukuku',
    'Gayrimenkul Hukuku',
    'Ticaret Hukuku',
    'İdare Hukuku',
    'İş Hukuku',
    'İcra Hukuku',
    'Araç Değer Kaybı'
  ];

  const [selectedCategory, setSelectedCategory] = useState('Tüm Makaleler');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className="categories-container">
      <h3>KATEGORİLER</h3>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
