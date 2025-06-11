import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faSun, faMoon, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "../context/DarkModeContext";
import { Link } from "react-router-dom";

function Footer() {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  React.useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("bg-dark", "text-light");
    } else {
      document.body.classList.remove("bg-dark", "text-light");
    }
  }, [isDarkMode]);
  
  return (
    <footer className="border-top bg-body-tertiary text-body py-5 mt-5">
      <Container>
        <Row className="gy-4">
          <Col lg={4} md={6}>
            <h2 className="mb-3 fw-bold">Stay Connected</h2>
            <p className="mb-3 text-secondary">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <Form className="d-flex position-relative mb-3">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="me-2"
              />
              <Button
                type="submit"
                variant="primary"
                className="position-absolute end-0 top-0 rounded-circle"
                style={{ width: "40px", height: "40px" }}
              >
                <FontAwesomeIcon icon={faPaperPlane} />
                <span className="visually-hidden">Subscribe</span>
              </Button>
            </Form>
          </Col>
          <Col lg={2} md={6}>
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-decoration-none text-secondary">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-decoration-none text-secondary">About</Link>
              </li>
              <li>
                <Link to="/projects" className="text-decoration-none text-secondary">Projects</Link>
              </li>
              <li>
                <Link to="/sidequest" className="text-decoration-none text-secondary">Side Quests</Link>
              </li>
              <li>
                <Link to="/contact" className="text-decoration-none text-secondary">Contact</Link>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={6}>
            <h5 className="mb-3">Contact Me</h5>
            <address className="text-secondary">
              <div>123 Innovation Street</div>
              <div>Tech City, TC 12345</div>
              <div>Phone: (123) 456-7890</div>
              <div>Email: hello@example.com</div>
            </address>
          </Col>
          <Col lg={3} md={6}>
            <h5 className="mb-3">Follow Me</h5>
            <div className="mb-3 d-flex gap-2">
              <a href="#" className="btn btn-outline-secondary rounded-circle" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="btn btn-outline-secondary rounded-circle" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="btn btn-outline-secondary rounded-circle" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="btn btn-outline-secondary rounded-circle" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
            <div className="d-flex align-items-center gap-2">
              <FontAwesomeIcon icon={faSun} />
              <Form.Check
                type="switch"
                id="dark-mode-switch"
                checked={isDarkMode}
                onChange={() => setIsDarkMode((v) => !v)}
                label=""
              />
              <FontAwesomeIcon icon={faMoon} />
              <span className="visually-hidden">Toggle dark mode</span>
            </div>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
            <small className="text-secondary">
              © 2025 bret's corner.
            </small>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <Link to="/privacy-policy" className="text-secondary me-3 text-decoration-none">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-secondary me-3 text-decoration-none">Terms of Service</Link>
            <Link to="/cookie-settings" className="text-secondary text-decoration-none">Cookie Settings</Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;