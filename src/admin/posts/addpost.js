import React, { useState } from "react";
import { Crepe } from "@milkdown/crepe";
import { Milkdown, MilkdownProvider } from "@milkdown/react";

const AddPost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return (
        <MilkdownProvider>
            <div style={{ maxWidth: 700, margin: "0 auto", padding: 24 }}>
                <h2>Add New Post</h2>
                <div style={{ marginBottom: 16 }}>
                    <label htmlFor="post-title" style={{ display: "block", marginBottom: 4 }}>
                        Title
                    </label>
                    <input
                        id="post-title"
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        style={{ width: "100%", padding: 8, fontSize: 16 }}
                        placeholder="Enter post title"
                    />
                </div>
                <div style={{ marginBottom: 16 }}>
                    <label htmlFor="post-content" style={{ display: "block", marginBottom: 4 }}>
                        Content
                    </label>
                    <Milkdown>
                        <Crepe
                            value={content}
                            onChange={setContent}
                            placeholder="Write your post content here..."
                        />
                    </Milkdown>
                </div>
                {/* Add your submit logic here */}
                <button
                    type="button"
                    onClick={() => {
                        // Handle submit logic
                        console.log({ title, content });
                    }}
                    style={{ padding: "8px 24px", fontSize: 16 }}
                >
                    Add Post
                </button>
            </div>
        </MilkdownProvider>
    );
};

export default AddPost;