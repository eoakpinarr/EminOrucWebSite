import React, { useState } from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import articles from '../mock/blogPosts.json'; // Makalelerinizi içeren JSON dosyası
import './Blog.css';

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredArticles, setFilteredArticles] = useState(articles);
    const navigate = useNavigate(); // Hook for navigation

    // Kategorileri oluştur
    const options = Array.from(new Set(articles.map(article => article.category))).map(category => ({
        value: category,
        label: category,
    }));

    // Tüm Kategoriler seçeneği
    const allCategoriesOption = { value: 'all', label: 'Tüm Kategoriler' };
    const allOptions = [allCategoriesOption, ...options];

    const handleChange = (selectedOption) => {
        setSelectedCategory(selectedOption);
        if (selectedOption) {
            if (selectedOption.value === 'all') {
                // Tüm makaleleri göster
                setFilteredArticles(articles);
            } else {
                // Seçilen kategoriye göre filtrele
                setFilteredArticles(articles.filter(article => article.category === selectedOption.value));
            }
        } else {
            setFilteredArticles(articles);
        }
    };

    const goToArticleDetail = (articleName) => {
        navigate(`/blog/${articleName}`); // Navigate to the article detail page
    };

    return (
        <div className='flex flex-col'>
            <div className='h-20 w-full bg-[#474445]'></div>
            <h1 className='text-center text-2xl font-bold my-5'>BLOG</h1>

            <div className='subpage-content flex flex-col lg:flex-row'>

                {/* Mobil Kategori Seçimi react select */}
                <div className='flex lg:hidden my-5 items-center w-full'>
                    <Select
                        styles={{
                            container: (provided) => ({
                                ...provided,
                                width: '100%',
                            }),
                            control: (provided) => ({
                                ...provided,
                                fontSize: '16px', // md boyut
                            }),
                            option: (provided, state) => ({
                                ...provided,
                                padding: state.isSelected ? '10px' : '8px', // sm ve md boyut
                                fontSize: state.isSelected ? '14px' : '12px', // sm boyut
                            }),
                        }}
                        options={allOptions}
                        onChange={handleChange}
                        placeholder="Makale Kategorisi Seçiniz."
                    />
                </div>

                {/* Kategoriler Sekmesi Sol kısım */}
                <div className='category-cont hidden lg:flex'>
                    <ul>
                        <li><strong className='font-bold text-lg'>KATEGORİLER</strong></li>
                        {allOptions.map(option => (
                            <li key={option.value}>
                                <a 
                                    href="#"
                                    onClick={() => handleChange({ value: option.value })}
                                >
                                    {option.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Blog Yazı Kısmı Sağ kısım */}
                <div className='list-cont'>
                    {filteredArticles.map(article => (
                        <div key={article.id} className='flex-grid'>
                            <div className='item'>
                                <div className='text-cont' onClick={() => goToArticleDetail(article.name)} style={{ cursor: 'pointer' }}>
                                    <div className='header-info'>
                                        <h6>{article.title}</h6>
                                        <span>
                                            <i className='fa fa-calendar'></i> {article.date} /
                                            <i className='fa fa-user'></i> {article.author}
                                        </span>
                                    </div>
                                    <p>{article.content}</p>
                                    <div className='info'>
                                        <span>Devamını Oku</span> {/* Change to span for better accessibility */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;