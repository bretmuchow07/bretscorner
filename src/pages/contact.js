import { Container, Card, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter, faLinkedin,faInstagram,faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import ContactMePic1 from "../assets/images/contact-me-dark.jpg";
import ContactMePic2 from "../assets/images/contact-me-light.jpg";
import { useDarkMode } from "../context/DarkModeContext";
import "../styles/ContactButton.css";
import LetterGlitch from "../components/letterGlitch";

function Contact() {
  const { darkMode } = useDarkMode();

  // Choose card background and text color based on mode
  const cardStyle = {
    maxWidth: "900px",
    background: darkMode ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.85)",
    color: darkMode ? "#fff" : "#222",
    backdropFilter: "blur(2px)",
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Glitch background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>
      {/* Main content */}
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ position: "relative", zIndex: 1, minHeight: "100vh" }}
      >
        <Card
          className={`w-100 shadow ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}
          style={cardStyle}
        >
          <div className="row g-0">
           { /* Left Side */}
                  <div
                    className="col-md-6 text-white d-flex flex-column justify-content-center p-4"
                    style={{
                    backgroundImage: `url(${darkMode ? ContactMePic1 : ContactMePic2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderTopLeftRadius: '0.375rem',
                    borderBottomLeftRadius: '0.375rem',
                    minHeight: '400px'
                    }}
                  >
                    <div style={{ backgroundColor: 'rgba(0,0,0,0.6)', padding: '20px', borderRadius: '10px' }}>
                    <h2>Let's Connect</h2>
                    <p>
                      Got something to say? Hit me up. Find me online or drop a message.
                      I'm chill 😎
                    </p>
                    <p>Email: <a href="mailto:your@email.com" className="text-white">your@email.com</a></p>
                    <div className="mt-3 d-flex gap-3">
                      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
                      <FontAwesomeIcon icon={faGithub} />
                      </a>
                      <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
                      <FontAwesomeIcon icon={faFacebook} />
                      </a>
                      <a href="https://x.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
                      <FontAwesomeIcon icon={faXTwitter} />
                      </a>
                      <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
                      <FontAwesomeIcon icon={faInstagram} />
                      </a>
                      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
                      <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </div>
                    </div>
                  </div>

                  {/* Right Side - Contact Form */}
            <div className="col-md-6 p-4">
              <h2 className="mb-4">Send a Message</h2>
              <Form>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Your Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Your Message" />
                </Form.Group>
                <button type="submit" className="contact-animated-btn w-100">
                  <span className="svg-wrapper">
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </span>
                  <span>Send</span>
                </button>
              </Form>
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default Contact;
