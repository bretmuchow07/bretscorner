import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useDarkMode } from '../context/DarkModeContext';
import { subscribeToNewsletter } from '../services/databaseService';
import { Mail } from 'lucide-react';

const NewsletterSignup = () => {
    const { isDarkMode } = useDarkMode();
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');
        try {
            await subscribeToNewsletter(email);
            setStatus('success');
            setMessage("Thanks for subscribing!");
            setEmail('');
        } catch (err) {
            setStatus('error');
            setMessage(err.message || "Something went wrong. Please try again.");
        }
    };

    return (
        <div className={`p-4 rounded shadow-sm ${isDarkMode ? 'bg-dark text-light border border-secondary' : 'bg-light'}`}>
            <div className="d-flex align-items-center gap-2 mb-3">
                <Mail size={24} />
                <h4 className="m-0">Join the Newsletter</h4>
            </div>
            <p className="text-muted mb-3">
                Get the latest updates on projects, side quests, and thoughts delivered to your inbox.
            </p>

            {status === 'success' ? (
                <Alert variant="success">{message}</Alert>
            ) : (
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={isDarkMode ? 'bg-secondary text-white border-0 placeholder-light' : ''}
                            style={isDarkMode ? { '::placeholder': { color: '#e0e0e0' } } : {}}
                            required
                        />
                    </Form.Group>
                    {status === 'error' && <Alert variant="danger" className="py-2 mb-3">{message}</Alert>}
                    <Button
                        variant="primary"
                        type="submit"
                        className="w-100 fw-bold"
                        disabled={status === 'loading'}
                    >
                        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                    </Button>
                </Form>
            )}
        </div>
    );
};

export default NewsletterSignup;
