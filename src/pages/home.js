import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../assets/images/iambret.png';
import Image2 from '../assets/images/othervibe.jpg';
import Image3 from '../assets/images/sidequest.jpg';
import Aurora from '../components/aurora';
import { useDarkMode } from "../context/DarkModeContext";
import Loader from '../components/Loader';
import { getRecentPosts } from '../services/databaseService';
import PostCard from '../components/PostCard';
import { Link } from 'react-router-dom';

function Home() {
  const { isDarkMode } = useDarkMode();
  const [posts, setPosts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // Fetch posts for the main area
        const data = await getRecentPosts(10);
        setPosts(data);
        // Also use the same data for the sidebar "Recent Posts" (limited to 5)
        setRecentPosts(data.slice(0, 5));
      } catch (err) {
        console.error("Failed to fetch posts:", err);
        setError("Failed to load posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={Image1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={Image2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={Image3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container className='my-1'> {/* Reduced margin here */}
        <Container className='my-4'>
          <Row className='g-4 d-flex'>
            <div className='col-md-8'>
              <h1 style={{ color: isDarkMode ? '#fff' : 'inherit' }}>Posts</h1>
              {loading ? (
                <Loader />
              ) : error ? (
                <div className="alert alert-danger">{error}</div>
              ) : (
                <Row className="g-4">
                  {posts.length > 0 ? (
                    posts.map(post => (
                      <Col md={6} key={post.id} className="d-flex">
                        <PostCard post={post} />
                      </Col>
                    ))
                  ) : (
                    <p className={isDarkMode ? 'text-white' : ''}>No posts found.</p>
                  )}
                </Row>
              )}
            </div>
            <div className='col-md-4'>
              <h5 style={{ color: isDarkMode ? '#fff' : 'inherit' }}>Search</h5>
              <Form.Control type="text" size="md" placeholder="Search posts..." className='mb-3' />
              <Button variant="primary" size="md" className='mb-3'>Search</Button>

              <h5 style={{ color: isDarkMode ? '#fff' : 'inherit' }}>Recent Posts</h5>
              <ul className='list-unstyled'>
                {recentPosts.map(post => (
                  <li key={post.id}>
                    <div className="d-flex align-items-center mb-2">
                      {/* Placeholder image if no thumbnail */}
                      <div
                        className="rounded me-2 d-flex align-items-center justify-content-center bg-secondary text-white"
                        style={{ width: 48, height: 48, fontSize: '0.8rem' }}
                      >
                        {post.title.charAt(0)}
                      </div>
                      <div>
                        <Link
                          to={`/post/${post.slug}`}
                          className="fw-bold d-block mb-0 text-decoration-none"
                          style={{ color: isDarkMode ? '#90cdf4' : '#0d6efd' }}
                        >
                          {post.title}
                        </Link>
                        <small className="text-muted">
                          {new Date(post.created_at).toLocaleDateString()}
                        </small>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <h5 style={{ color: isDarkMode ? '#fff' : 'inherit', marginTop: '1rem' }}>Tags</h5>
              <span className='badge bg-secondary me-1 fs-6'>Tag1</span>
              <span className='badge bg-secondary me-1 fs-6'>Tag2</span>
              <span className='badge bg-secondary me-1 fs-6'>Tag3</span>

              <h5 style={{ color: isDarkMode ? '#fff' : 'inherit', marginTop: '1rem' }}>Categories</h5>
              <ul className="list-group">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
              </ul>
            </div>
          </Row>
        </Container>
      </Container>
    </div>
  )
}

export default Home;
