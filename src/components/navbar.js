import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Logo from '../logo.svg'; // Adjust the path to your logo
import Home from '../pages/home';
import About from '../pages/about';
import Projects from '../pages/projects';
import SideQuest from '../pages/sidequest';
import Contact from '../pages/contact';

function _navbar() {
  return (
    <>
      <div>
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
          <Container>
               <Navbar.Brand href="/">
            <img
              alt=""
              src={Logo} // Replace with your logo path
              width="100"
              height="50"
              className="d-inline-block align-top"
            />{' '}
           
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav variant='underline' className="mx-auto fw-bold" defaultActiveKey="/home">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                <Nav.Link as={Link} to="/sidequest">Side Quests</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/sidequest" element={<SideQuest />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </>
  );
}

export default _navbar;
