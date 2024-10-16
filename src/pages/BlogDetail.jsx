import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from '../mock/blogPosts.json'; // Import your blog posts

const BlogDetail = () => {
    const { postName } = useParams(); // Get postName from URL
    const post = blogPosts.find((p) => p.name === postName); // Find the post based on the name

    if (!post) {
        return <div>Blog post not found!</div>; // Handle case where post is not found
    }

    return (
        <div className="max-w-[800px] mx-auto p-5">
            <h1 className="text-3xl mb-4">{post.title}</h1>
            <p className="text-gray-600 mb-2"><strong>{post.date}</strong> by {post.author}</p>
            <p>{post.content}</p> {/* Assuming post.content contains the full text */}
        </div>
    );
};

export default BlogDetail;