// import loginImage from './loginImage.png';
import './LandingPage.css';
import Container from 'react-bootstrap/Container';
import {Row, Col, Button, Navbar, Nav} from 'react-bootstrap';

function LandingPage() {
  return (
    <Container>
      <div className='landingPage'>
        <div className='inContainer'>




          <Row>
            <Navbar bg="light" variant="light">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Add Recipe</Nav.Link>
                <Nav.Link href="#pricing">Profile</Nav.Link>
              </Nav>
            </Navbar>
          </Row>
          <Row>
            <Col>
            </Col>
          </Row>
          <Button></Button>




        </div>
      </div>
    </Container>
  );
}

export default LandingPage;