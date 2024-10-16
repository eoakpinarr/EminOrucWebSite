import React from 'react';

const BlogPostBox = ({ title, date, author, excerpt }) => {
    return (
        <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-sm text-gray-600 mb-1">
                <i className='fa fa-calendar'></i> {date} /
                <i className='fa fa-user'></i> {author}
            </p>
            <p className="text-gray-700 mb-2">{excerpt}</p>
            <a href="#" className="text-blue-500 hover:underline">Devamını Oku</a>
        </div>
    );
};

export default BlogPostBox;