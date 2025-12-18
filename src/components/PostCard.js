import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';

// Simple date formatter if date-fns is not desired/available yet, 
// though date-fns is standard. I'll stick to native for zero-dep if possible 
// or check package.json. package.json didn't show date-fns, so I'll write a helper.

const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });
};

const PostCard = ({ post }) => {
    const { isDarkMode } = useDarkMode();

    return (
        <Card
            className={`h-100 shadow-sm ${isDarkMode ? 'bg-dark text-light border-secondary' : ''}`}
            style={{ transition: 'transform 0.2s', cursor: 'pointer' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
            {/* Thumbnail support if you add it later */}
            {post.thumbnail && (
                <Card.Img variant="top" src={post.thumbnail} style={{ height: 200, objectFit: 'cover' }} />
            )}
            <Card.Body className="d-flex flex-column">
                <div className="mb-2">
                    {/* Placeholder for tags if we had them in the post object */}
                    {/* <Badge bg="primary" className="me-1">Tech</Badge> */}
                    <small className={isDarkMode ? 'text-muted' : 'text-muted'}>
                        {formatDate(post.created_at)}
                    </small>
                </div>
                <Card.Title as="h5" className="mb-3">
                    <Link
                        to={`/post/${post.slug}`}
                        className="text-decoration-none stretched-link"
                        style={{ color: isDarkMode ? '#fff' : 'inherit' }}
                    >
                        {post.title}
                    </Link>
                </Card.Title>
                <Card.Text className="flex-grow-1" style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                }}>
                    {/* Strip markdown for excerpt or use a summary field if available.
                        For now just showing raw content stripped of some markdown chars could be complex.
                        Ideally DB has a summary column. If not, we just show a snippet. */}
                    {post.content ? post.content.replace(/[#*`]/g, '').substring(0, 150) + '...' : ''}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default PostCard;
