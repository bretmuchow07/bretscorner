import React, { useState, useEffect } from "react";
import { Crepe } from "@milkdown/crepe";
import { Milkdown, MilkdownProvider, useEditor } from "@milkdown/react";
import { createPost } from "../../services/databaseService";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../../context/DarkModeContext";
import "@milkdown/crepe/theme/common/style.css";

// Separate component for the editor to use the hook inside the provider
const MilkdownEditorWrapper = ({ content, onChange, isDarkMode }) => {
    useEditor((root) => {
        const crepe = new Crepe({
            root,
            defaultValue: content,
            featureConfigs: {
                // Configure features if needed
                [Crepe.Feature.Placeholder]: {
                    text: 'Write your post content here...',
                },
                [Crepe.Feature.ImageBlock]: {
                    // Default behavior uses Base64 for images, which matches the requirement
                    // to "convert to markdown" (embed data URI).
                },
            },
        });

        crepe.setReadonly(false);

        // Listen for changes
        crepe.on((listener) => {
            listener.markdownUpdated((ctx, markdown, prevMarkdown) => {
                if (onChange) {
                    onChange(markdown);
                }
            });
        });

        return crepe;
    }, []); // Empty dependency array to initialize once

    return <Milkdown />;
};

const AddPost = () => {
    const { isDarkMode } = useDarkMode();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (!title.trim() || !content.trim()) {
            setError("Title and content are required");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            const postData = {
                title: title.trim(),
                content: content.trim(),
                slug,
                created_at: new Date().toISOString(),
            };

            await createPost(postData);
            navigate("/admin/posts");
        } catch (err) {
            setError("Failed to create post: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <MilkdownProvider>
            <div style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
                <div style={{ marginBottom: 24 }}>
                    <h2 style={{ marginBottom: 8, color: isDarkMode ? "#fff" : "#000" }}>Add New Post</h2>
                    <p style={{ color: isDarkMode ? "#d1d5db" : "#666", fontSize: 14 }}>
                        Use the rich text editor below with formatting toolbar, markdown shortcuts, and more.
                    </p>
                </div>

                {error && (
                    <div style={{
                        color: "#dc2626",
                        backgroundColor: "#fee2e2",
                        padding: "12px 16px",
                        borderRadius: "6px",
                        marginBottom: 16,
                        border: "1px solid #fecaca"
                    }}>
                        {error}
                    </div>
                )}

                <div style={{ marginBottom: 20 }}>
                    <label htmlFor="post-title" style={{
                        display: "block",
                        marginBottom: 8,
                        fontWeight: 600,
                        fontSize: 14,
                        color: isDarkMode ? "#e5e7eb" : "#1f2937"
                    }}>
                        Title
                    </label>
                    <input
                        id="post-title"
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "10px 12px",
                            fontSize: 16,
                            border: `1px solid ${isDarkMode ? "#374151" : "#d1d5db"}`,
                            backgroundColor: isDarkMode ? "#1f2937" : "#fff",
                            color: isDarkMode ? "#fff" : "#000",
                            borderRadius: "6px",
                            outline: "none",
                            transition: "border-color 0.2s"
                        }}
                        placeholder="Enter post title"
                        disabled={loading}
                    />
                </div>

                <div style={{ marginBottom: 20 }}>
                    <label style={{
                        display: "block",
                        marginBottom: 8,
                        fontWeight: 600,
                        fontSize: 14,
                        color: isDarkMode ? "#e5e7eb" : "#1f2937"
                    }}>
                        Content
                    </label>
                    <div style={{
                        border: `1px solid ${isDarkMode ? "#374151" : "#d1d5db"}`,
                        borderRadius: '8px',
                        minHeight: '800px',
                        backgroundColor: isDarkMode ? "#1f2937" : "#fff",
                        overflow: 'hidden',
                        color: isDarkMode ? "#e5e7eb" : "#000"
                    }}>
                        <MilkdownEditorWrapper
                            content={content}
                            onChange={setContent}
                            isDarkMode={isDarkMode}
                        />
                    </div>
                    <div style={{
                        marginTop: 8,
                        fontSize: 12,
                        color: isDarkMode ? "#9ca3af" : "#6b7280",
                        lineHeight: 1.5
                    }}>
                        <strong>Quick tips:</strong> Use the toolbar above for formatting, or try markdown:
                        # Heading, **bold**, *italic*, `code`, [link](url), ![image](url), - lists, &gt; quotes, ``` code blocks
                    </div>
                </div>

                <div style={{ display: "flex", gap: 12 }}>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={loading}
                        style={{
                            padding: "10px 24px",
                            fontSize: 16,
                            backgroundColor: loading ? "#9ca3af" : "#3b82f6",
                            color: "#fff",
                            border: "none",
                            borderRadius: "6px",
                            cursor: loading ? "not-allowed" : "pointer",
                            fontWeight: 600,
                            transition: "background-color 0.2s"
                        }}
                    >
                        {loading ? "Adding Post..." : "Add Post"}
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate("/admin/posts")}
                        disabled={loading}
                        style={{
                            padding: "10px 24px",
                            fontSize: 16,
                            backgroundColor: isDarkMode ? "#374151" : "#fff",
                            color: isDarkMode ? "#fff" : "#374151",
                            border: `1px solid ${isDarkMode ? "#4b5563" : "#d1d5db"}`,
                            borderRadius: "6px",
                            cursor: loading ? "not-allowed" : "pointer",
                            fontWeight: 600,
                            transition: "background-color 0.2s"
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </MilkdownProvider>
    );
};

export default AddPost;