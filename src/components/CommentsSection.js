import React, { useState, useEffect } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';
import { useDarkMode } from '../context/DarkModeContext';
import { getComments, addComment } from '../services/databaseService';

const CommentsSection = ({ entityId, entityType }) => {
    const { isDarkMode } = useDarkMode();
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [loading, setLoading] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!entityId) return;
        const fetchComments = async () => {
            setLoading(true);
            try {
                const data = await getComments(entityId, entityType);
                setComments(data);
            } catch (err) {
                console.error("Failed to load comments", err);
                setError("Failed to load comments.");
            } finally {
                setLoading(false);
            }
        };

        fetchComments();
    }, [entityId, entityType]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!newComment.trim()) return;

        setSubmitting(true);
        setError(null);
        try {
            const commentData = {
                entity_id: entityId,
                entity_type: entityType,
                content: newComment.trim(),
                author_name: authorName.trim() || 'Anonymous',
                // created_at is handled by default usually, but we can send it if needed or rely on DB default
                created_at: new Date().toISOString()
            };

            // If post/project/sidequest specific columns exist and are required, we might need to handle that.
            // But based on my flexible plan, we are using entity_type/entity_id in the service.
            // However, the DB might have specific columns like post_id. 
            // My service implementation uses entity_type/entity_id queries but the INSERT might need to set specific columns if the table is strict.
            // Assumption: The table has 'entity_type' and 'entity_id' columns OR the service maps them.
            // Let's look at my service implementation again.
            // Service `addComment` simply inserts the object.
            // If the DB has `post_id`, we might need to map it.
            // To be safe, I'll pass post_id if entityType is 'post', etc, if existing schema requires it.
            // Since I don't know the exact schema, I'll stick to the strict `entity_id` / `entity_type` plan.
            // If it fails, I'll debug.
            // Additional safety: if entityType is 'post', also set post_id = entityId.
            if (entityType === 'post') commentData.post_id = entityId;
            // Similar for others if they exist.

            const added = await addComment(commentData);
            setComments([...comments, added]);
            setNewComment('');
            setAuthorName('');
        } catch (err) {
            console.error("Failed to add comment", err);
            setError("Failed to post comment. " + err.message);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className={`mt-5 ${isDarkMode ? 'text-light' : ''}`}>
            <h3>Comments ({comments.length})</h3>

            <ListGroup className="mb-4" variant="flush">
                {comments.length === 0 ? (
                    <p className="text-muted">No comments yet. Be the first!</p>
                ) : (
                    comments.map(comment => (
                        <ListGroup.Item
                            key={comment.id}
                            className={`px-0 py-3 ${isDarkMode ? 'bg-transparent text-light border-secondary' : 'bg-transparent'}`}
                        >
                            <div className="d-flex justify-content-between">
                                <span className="fw-bold">{comment.author_name}</span>
                                <small className="text-muted">
                                    {new Date(comment.created_at).toLocaleDateString()}
                                </small>
                            </div>
                            <p className="mb-0 mt-1">{comment.content}</p>
                        </ListGroup.Item>
                    ))
                )}
            </ListGroup>

            <div className={`p-3 rounded ${isDarkMode ? 'bg-dark border border-secondary' : 'bg-light'}`}>
                <h5>Leave a Comment</h5>
                {error && <div className="alert alert-danger">{error}</div>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Name (Optional)"
                            value={authorName}
                            onChange={e => setAuthorName(e.target.value)}
                            className={isDarkMode ? 'bg-secondary text-white border-0' : ''}
                            style={isDarkMode ? { '--bs-body-color': '#fff', '::placeholder': { color: '#e0e0e0' } } : {}}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Your comment..."
                            value={newComment}
                            onChange={e => setNewComment(e.target.value)}
                            required
                            className={isDarkMode ? 'bg-secondary text-white border-0' : ''}
                        />
                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit"
                        disabled={submitting || !newComment.trim()}
                    >
                        {submitting ? 'Posting...' : 'Post Comment'}
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default CommentsSection;
