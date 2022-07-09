import {
  Row,
  Col,
  Navbar, 
  Nav, 
} from 'react-bootstrap';

function NavbarPage() {
  return (
    <Row className="mb-4">
      <Col>
        <Navbar bg="transparent" variant="light">
          <Nav className="me-auto">
            <Nav.Link nameClass="navlink" href="/">Home</Nav.Link>
            <Nav.Link nameClass="navlink" href="newrecipe">Add Recipe</Nav.Link>
            <Nav.Link nameClass="navlink" href="profile">Profile</Nav.Link>
          </Nav>
        </Navbar>
      </Col>
      <Col>
        <Navbar bg="transparent" variant="light" className="justify-content-end">
          <Nav className="justify-content-end">
            <Nav.Link nameClass="navlink" href="login">Login</Nav.Link>
            <Nav.Link nameClass="navlink" href="register">Register</Nav.Link>
          </Nav>
        </Navbar>
      </Col>
    </Row>
  );
}

export default NavbarPage;