import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Heart } from 'lucide-react';
import { getLikesCount, addLike } from '../services/databaseService';
import { useDarkMode } from '../context/DarkModeContext';

const LikeButton = ({ entityId, entityType }) => {
    const { isDarkMode } = useDarkMode();
    const [count, setCount] = useState(0);
    const [liked, setLiked] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchLikes = async () => {
            try {
                const total = await getLikesCount(entityId, entityType);
                setCount(total);
                // Check local storage to see if already liked (simple client-side check)
                const hasLiked = localStorage.getItem(`liked-${entityType}-${entityId}`);
                if (hasLiked) setLiked(true);
            } catch (err) {
                console.error("Failed to fetch likes", err);
            }
        };
        fetchLikes();
    }, [entityId, entityType]);

    const handleLike = async () => {
        if (liked || loading) return;
        setLoading(true);
        try {
            await addLike(entityId, entityType);
            setCount(prev => prev + 1);
            setLiked(true);
            localStorage.setItem(`liked-${entityType}-${entityId}`, 'true');
        } catch (err) {
            console.error("Failed to add like", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Button
            variant={liked ? "danger" : (isDarkMode ? "outline-light" : "outline-danger")}
            onClick={handleLike}
            disabled={liked || loading}
            className="d-flex align-items-center gap-2"
        >
            <Heart size={18} fill={liked ? "currentColor" : "none"} />
            <span>{count} {count === 1 ? 'Like' : 'Likes'}</span>
        </Button>
    );
};

export default LikeButton;
