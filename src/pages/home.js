import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../assets/images/iambret.png';
import Image2 from '../assets/images/othervibe.jpg';
import Image3 from '../assets/images/sidequest.jpg';
import Aurora from '../components/aurora'; 
import { useDarkMode } from "../context/DarkModeContext";
import Loader from '../components/Loader';

function Home() {
  const { isDarkMode } = useDarkMode();
  const loading = false; // Set to true to show loaders

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
              <h1>Posts</h1>
              <Row className="g-4">
                 <Card className="bg-dark text-white">
                  <Card.Img src="holder.js/100px270" alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </Card.ImgOverlay>
                </Card>
                <Col md={6}>
                  {loading ? (
                    <Loader />
                  ) : (
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
                  )}
                </Col>
                <Col md={6}>
                  {loading ? (
                    <Loader />
                  ) : (
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
                  )}
                </Col>
                {/* Add more <Col md={6} md="auto">...</Col> for more cards */}
                        </Row>
                      </div>
                      <div className='col-md-4'>
                        <h5>Search</h5>
                        <Form.Control type="text" size="md" placeholder="Search posts..." className='mb-3' />
                        <Button variant="primary" size="md" className='mb-3'>Search</Button>
                        <h5>Recent Posts</h5>
                        <ul className='list-unstyled'>
                        <li>
                          <div className="d-flex align-items-center mb-2">
                          <img src={Image1} alt="Post 1" width={48} height={48} className="rounded me-2" />
                          <div>
                            <a href="#" className="fw-bold d-block mb-0">Post 1</a>
                            <small className="text-muted">2 hours ago</small>
                          </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex align-items-center mb-2">
                          <img src={Image2} alt="Post 2" width={48} height={48} className="rounded me-2" />
                          <div>
                            <a href="#" className="fw-bold d-block mb-0">Post 2</a>
                            <small className="text-muted">5 hours ago</small>
                          </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex align-items-center mb-2">
                          <img src={Image3} alt="Post 3" width={48} height={48} className="rounded me-2" />
                          <div>
                            <a href="#" className="fw-bold d-block mb-0">Post 3</a>
                            <small className="text-muted">1 day ago</small>
                          </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex align-items-center mb-2">
                          <img src={Image1} alt="Post 4" width={48} height={48} className="rounded me-2" />
                          <div>
                            <a href="#" className="fw-bold d-block mb-0">Post 4</a>
                            <small className="text-muted">3 days ago</small>
                          </div>
                          </div>
                        </li>
                        </ul>
                        <h5>Tags</h5>
                        <span className='badge bg-secondary me-1 fs-6'>Tag1</span>
                        <span className='badge bg-secondary me-1 fs-6'>Tag2</span>
                        <span className='badge bg-secondary me-1 fs-6'>Tag3</span>
                        <span className='badge bg-secondary me-1 fs-6'>Tag4</span>
                        <span className='badge bg-secondary me-1 fs-6'>Tag5</span>
                        <h5>Categories</h5>
                        <ul className="list-group">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                        <li className="list-group-item">A fourth item</li>
                        <li className="list-group-item">And a fifth one</li>
                        </ul>
                        {/* Sidebar or other content */}
            </div>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default Home;
