import React, { useState } from 'react';
import { Container, Form, Button, Alert, Card } from "react-bootstrap";
import { signUp } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from "../context/DarkModeContext";

function Signup() {
  const { isDarkMode } = useDarkMode();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      await signUp(email, password);
      setSuccess('Registration successful! Please check your email to verify your account.');
      // Optionally redirect to login after a delay
      setTimeout(() => {
        navigate('/admin/login');
      }, 3000);
    } catch (err) {
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  // Determine styles based on dark mode
  const bgClass = loading ? "" : (isDarkMode ? "bg-dark text-white" : "bg-light text-dark");
  const cardClass = isDarkMode ? "bg-secondary text-white border-0" : "bg-white border-0";
  const inputClass = isDarkMode ? "bg-dark text-white border-secondary" : "";
  const linkClass = isDarkMode ? "text-light" : "text-primary";

  return (
    <div className={`d-flex align-items-center justify-content-center min-vh-100 ${bgClass}`}>
      <Container style={{ maxWidth: "400px" }}>
        <Card className={`shadow-lg ${cardClass}`}>
          <Card.Body className="p-5">
            <h2 className="text-center mb-4 fw-bold">Admin Signup</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={inputClass}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className={inputClass}
                />
              </Form.Group>

              <Form.Group controlId="formBasicConfirmPassword" className="mb-4">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className={inputClass}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mb-3" disabled={loading}>
                {loading ? 'Signing up...' : 'Sign Up'}
              </Button>
            </Form>

            <div className="text-center mt-3">
              <small>
                Already have an account? <a href="/admin/login" className={linkClass}>Sign In</a>
              </small>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Signup;