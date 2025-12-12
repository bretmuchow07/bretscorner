import React, { useState, useEffect } from "react";
import { MilkdownProvider } from "@milkdown/react";
import { useParams, useNavigate } from "react-router-dom";
import { getPostById, updatePost } from "../../services/databaseService";
import { useDarkMode } from "../../context/DarkModeContext";
import MilkdownEditorWrapper from "../../components/MilkdownEditorWrapper";
import "@milkdown/crepe/theme/common/style.css";

const EditPost = () => {
    const { postId } = useParams();
    const navigate = useNavigate();
    const { isDarkMode } = useDarkMode();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPost = async () => {
            try {
                // The list links to /admin/posts/:id, so postId is the UUID
                const post = await getPostById(postId);
                if (post) {
                    setTitle(post.title);
                    setContent(post.content || "");
                } else {
                    setError("Post not found");
                }
            } catch (err) {
                setError("Failed to load post: " + err.message);
            } finally {
                setLoading(false);
            }
        };

        if (postId) {
            fetchPost();
        }
    }, [postId]);

    const handleSubmit = async () => {
        if (!title.trim() || !content.trim()) {
            setError("Title and content are required");
            return;
        }

        setSaving(true);
        setError("");

        try {
            const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            const postData = {
                title: title.trim(),
                content: content.trim(),
                slug,
                updated_at: new Date().toISOString(),
            };

            await updatePost(postId, postData);
            navigate("/admin/posts");
        } catch (err) {
            setError("Failed to update post: " + err.message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) return (
        <div style={{ padding: 24, textAlign: "center", color: isDarkMode ? "#fff" : "#000" }}>
            Loading post...
        </div>
    );

    return (
        <MilkdownProvider>
            <div style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
                <div style={{ marginBottom: 24 }}>
                    <h2 style={{ marginBottom: 8, color: isDarkMode ? "#fff" : "#000" }}>Edit Post</h2>
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
                        disabled={saving}
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
                        minHeight: '400px',
                        backgroundColor: isDarkMode ? "#1f2937" : "#fff",
                        overflow: 'hidden',
                        color: isDarkMode ? "#e5e7eb" : "#000"
                    }}>
                        {/* Only render editor when content is loaded to ensure defaultValue is correct */}
                        <MilkdownEditorWrapper
                            content={content}
                            onChange={setContent}
                            isDarkMode={isDarkMode}
                        />
                    </div>
                </div>

                <div style={{ display: "flex", gap: 12 }}>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={saving}
                        style={{
                            padding: "10px 24px",
                            fontSize: 16,
                            backgroundColor: saving ? "#9ca3af" : "#3b82f6",
                            color: "#fff",
                            border: "none",
                            borderRadius: "6px",
                            cursor: saving ? "not-allowed" : "pointer",
                            fontWeight: 600,
                            transition: "background-color 0.2s"
                        }}
                    >
                        {saving ? "Saving..." : "Save Changes"}
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate("/admin/posts")}
                        disabled={saving}
                        style={{
                            padding: "10px 24px",
                            fontSize: 16,
                            backgroundColor: isDarkMode ? "#374151" : "#fff",
                            color: isDarkMode ? "#fff" : "#374151",
                            border: `1px solid ${isDarkMode ? "#4b5563" : "#d1d5db"}`,
                            borderRadius: "6px",
                            cursor: saving ? "not-allowed" : "pointer",
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

export default EditPost;