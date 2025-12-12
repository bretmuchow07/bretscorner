import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPosts, deletePost } from "../../services/databaseService";

const PostCard = ({ post, onDelete }) => (
    <div style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "12px 0",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
    }}>
        <h2>{post.title}</h2>
        <p>{post.content ? post.content.substring(0, 100) + "..." : "No content"}</p>
        <div style={{ marginTop: "10px" }}>
            <Link to={`/admin/posts/${post.id}`} style={{ marginRight: "10px" }}>View</Link>
            <Link to={`/admin/posts/${post.id}/edit`} style={{ marginRight: "10px" }}>Edit</Link>
            <button
                onClick={() => onDelete(post.id)}
                style={{ color: "red", border: "none", background: "none", cursor: "pointer" }}
            >
                Delete
            </button>
        </div>
    </div>
);

export default function PostsList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPosts = async () => {
        try {
            const data = await getAllPosts();
            setPosts(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            try {
                await deletePost(id);
                setPosts(posts.filter(post => post.id !== id));
            } catch (err) {
                setError("Failed to delete post: " + err.message);
            }
        }
    };

    if (loading) return <div>Loading posts...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Posts</h1>
            <Link to="/admin/posts/add" style={{ marginBottom: "20px", display: "inline-block" }}>Add New Post</Link>
            {posts.length === 0 ? (
                <p>No posts found.</p>
            ) : (
                posts.map(post => (
                    <PostCard key={post.id} post={post} onDelete={handleDelete} />
                ))
            )}
        </div>
    );
}