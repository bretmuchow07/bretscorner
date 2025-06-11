import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../assets/images/iambret.png';
import Image2 from '../assets/images/othervibe.jpg';
import Image3 from '../assets/images/sidequest.jpg';
import Aurora from '../components/aurora'; 
import { useDarkMode } from "../context/DarkModeContext";

function Home() {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      {/* {isDarkMode && (
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      )} */}
      <Container className='my-1'> {/* Reduced margin here */}
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
        <Container className='my-4'>
          <Row className='g-4 d-flex'>
            <div className='col-md-8'>
              <h1>Posts</h1>
              <Row className="g-4">
                <Col md={6}>
                  <Card className='h-100 w-100'>
                    <Card.Img variant="top" src="holder.js/100px180" className='img-thumbnail' />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className='h-100 w-100'>
                    <Card.Img variant="top" src="holder.js/100px180" className='img-thumbnail' />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
                {/* Add more <Col md={6}>...</Col> for more cards */}
              </Row>
            </div>
            <div className='col-md-4'>
              <h5>Search</h5>
              <Form.Control type="text" placeholder="Search posts..." className='mb-3' />
              <Button variant="primary" className='mb-3'>Search</Button>
              <h5>Recent Posts</h5>
              <ul className='list-unstyled'>
                <li><a href="#">Post 1</a></li>
                <li><a href="#">Post 2</a></li>
                <li><a href="#">Post 3</a></li>
                <li><a href="#">Post 4</a></li>
              </ul>
              <h5>Tags</h5>

              <h5>Categories</h5>

              {/* Sidebar or other content */}
            </div>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default Home;
