import {
  Nav,
} from 'react-bootstrap';
import NavbarPage from "../components/organism/NavbarPage";
import FooterBottom from "../components/organism/FooterBottom";
import defaultAvatar from '../assets/defaultAvatar.jpg';

function Profile() {
  return (
    <div className="Profile">
      <NavbarPage />

      <img src={defaultAvatar} alt='user avatar' className="avatar"></img>
      {/* <Image src={defaultAvatar} rounded ></Image> */}
      <h5 className="mt-3">PARAGRAF TEMPAT ISI NAMA !!!</h5>
      
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
        
        <FooterBottom />

    </div>
  );
}

export default Profile;