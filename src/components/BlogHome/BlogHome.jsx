import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import blogPosts from '../../mock/blogPosts.json'; // Blog yazılarınızın olduğu JSON dosyası
import BlogPostBox from './BlogPostBox';

const BlogHome = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(1); // Başlangıçta küçük ekran için 1
    const navigate = useNavigate(); // Use useNavigate for navigation

    useEffect(() => {
        const handleResize = () => {
            setItemsToShow(window.innerWidth < 768 ? 1 : 2); // Küçük ekranlarda 1, diğerlerinde 2 öğe göster
        };

        handleResize(); // İlk render'da kontrol et
        window.addEventListener('resize', handleResize); // Ekran boyutu değişimini takip et
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextPost = () => {
        setCurrentIndex((prevIndex) => (prevIndex + itemsToShow) % blogPosts.length);
    };

    const prevPost = () => {
        setCurrentIndex((prevIndex) => (prevIndex - itemsToShow + blogPosts.length) % blogPosts.length);
    };

    const goToPostDetail = (postName) => {
        navigate(`/blog/${postName}`); // Navigate to the blog post detail page
    };

    return (
        <div className="flex flex-col items-center mt-5 max-w-[1200px] mx-auto py-5 px-10">
            <h2 className="text-4xl mb-4">Blog Yazıları</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 w-full">
                {blogPosts.slice(currentIndex, currentIndex + itemsToShow).map((post) => (
                    <div className='w-full' key={post.id}>
                        <div onClick={() => goToPostDetail(post.name)} style={{ cursor: 'pointer' }}>
                            <BlogPostBox
                                title={post.title}
                                date={post.date}
                                author={post.author}
                                excerpt={post.excerpt}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex mt-4">
                <button onClick={prevPost} className="p-2 text-xl text-gray-500 hover:text-gray-900">
                    <FaArrowLeft />
                </button>
                <button onClick={nextPost} className="p-2 text-xl text-gray-500 hover:text-gray-900">
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default BlogHome;