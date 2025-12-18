import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Badge, Spinner } from 'react-bootstrap';
import { Crepe } from "@milkdown/crepe";
import { Milkdown, MilkdownProvider, useEditor } from "@milkdown/react";
import "@milkdown/crepe/theme/common/style.css";
import { getPostBySlug } from '../services/databaseService';
import { useDarkMode } from '../context/DarkModeContext';
import CommentsSection from '../components/CommentsSection';
import LikeButton from '../components/LikeButton';
import NewsletterSignup from '../components/NewsletterSignup';

// Read-only editor helper
const MilkdownReader = ({ content }) => {
    useEditor((root) => {
        const crepe = new Crepe({
            root,
            defaultValue: content,
            featureConfigs: {
                [Crepe.Feature.Placeholder]: { text: '' }, // No placeholder in read mode
            }
        });
        crepe.setReadonly(true);
        return crepe;
    }, [content]);

    return <Milkdown />;
};

const PostView = () => {
    const { slug } = useParams();
    const { isDarkMode } = useDarkMode();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const data = await getPostBySlug(slug);
                setPost(data);
            } catch (err) {
                console.error("Failed to load post", err);
                setError("Post not found.");
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, [slug]);

    if (loading) return (
        <Container className="py-5 text-center">
            <Spinner animation="border" variant="primary" />
        </Container>
    );

    if (error || !post) return (
        <Container className="py-5 text-center">
            <h2>{error || "Post not found"}</h2>
            <Link to="/" className="btn btn-primary mt-3">Go Home</Link>
        </Container>
    );

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col lg={8}>
                    <div className="mb-4">
                        <Link to="/" className="text-decoration-none text-muted mb-2 d-inline-block">← Back to Home</Link>
                        <h1 className={`display-4 fw-bold mb-3 ${isDarkMode ? 'text-white' : ''}`}>
                            {post.title}
                        </h1>
                        <div className="d-flex align-items-center gap-3 text-muted">
                            <small>{new Date(post.created_at).toLocaleDateString()}</small>
                            {/* <Badge bg="secondary">Tech</Badge> */}
                        </div>
                    </div>

                    <div className={`post-content ${isDarkMode ? 'dark-mode-content' : ''}`} style={{
                        backgroundColor: isDarkMode ? '#1f2937' : '#fff',
                        padding: '24px',
                        borderRadius: '8px',
                        color: isDarkMode ? '#e5e7eb' : '#374151',
                        border: isDarkMode ? '1px solid #374151' : '1px solid #e5e7eb'
                    }}>
                        <MilkdownProvider>
                            <MilkdownReader content={post.content} />
                        </MilkdownProvider>
                    </div>

                    <div className="d-flex align-items-center justify-content-between mt-5 py-4 border-top border-bottom">
                        <LikeButton entityId={post.id} entityType="post" />
                        <div className="text-muted">
                            Share this post
                        </div>
                    </div>

                    <div className="mt-5">
                        <NewsletterSignup />
                    </div>

                    <CommentsSection entityId={post.id} entityType="post" />
                </Col>
            </Row>
        </Container>
    );
};

export default PostView;
