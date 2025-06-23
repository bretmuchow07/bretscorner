import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Dummy data for demonstration
const posts = [
    { id: '1', title: 'First Post', content: 'This is the first blog post.' },
    { id: '2', title: 'Second Post', content: 'This is the second blog post.' },
];

const Post = () => {
    const { postId } = useParams();
    const navigate = useNavigate();

    // Find the post by ID
    const post = posts.find((p) => p.id === postId);

    if (!post) {
        return <div>Post not found.</div>;
    }

    const handleEdit = () => {
        navigate(`/admin/posts/${postId}/edit`);
    };

    return (
        <div>
            <h1>{post.title}</h1>
            <div>{post.content}</div>
            <button onClick={handleEdit}>Edit Post</button>
        </div>
    );
};

export default Post;