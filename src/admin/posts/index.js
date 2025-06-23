import React, { useEffect, useState } from "react";

const mockPosts = [
    { id: 1, title: "First Post", summary: "This is the first post." },
    { id: 2, title: "Second Post", summary: "This is the second post." },
    { id: 3, title: "Third Post", summary: "This is the third post." },
];

const PostCard = ({ post }) => (
    <div style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "12px 0",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
    }}>
        <h2>{post.title}</h2>
        <p>{post.summary}</p>
    </div>
);

export default function PostsList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Replace this with your API call
        setPosts(mockPosts);
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}