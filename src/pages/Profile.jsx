import loginImage from './loginImage.png';
import './Profile.css';
import {
  Container, 
  // Row, 
  // Col, 
  // Form, 
  // Button,
  // Image
  Nav,
} from 'react-bootstrap';

function Profile() {
  return (
    <div className="Profile">
      <img src={loginImage} alt='user avatar' className="avatar"></img>
      {/* <Image src={loginImage} rounded ></Image> */}
    <p>TEST FONT !! 123 abcde</p>
      <Container>
        <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/profile">My Recipe</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>Saved Recipe</Nav.Link>
            {/* <Nav.Link eventKey="link-1">Save Recipe</Nav.Link> */}
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>Liked Recipe</Nav.Link>
          </Nav.Item>
        </Nav>
        <hr/>
      
      </Container>

    </div>
  );
}

export default Profile;