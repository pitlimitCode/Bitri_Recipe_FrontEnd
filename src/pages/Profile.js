import {
  Container,
  Nav,
  Image,
} from 'react-bootstrap';

import React from 'react';
import axios from "axios";

import NavbarPage from "../components/organism/NavbarPage";
import FooterBottom from "../components/organism/FooterBottom";

// import avatarUser from '../assets/default/avatar.jpg';

import { useLocation } from 'react-router-dom';

export default function Profile() {
  // get params url ?id='id'
  const search = useLocation().search;
  const id = new URLSearchParams(search).get('id');
  
  const [userName, setUserName] = React.useState("");
  const [avatar, setAvatar] = React.useState("");
  // let showAvatar = avatar;

  React.useEffect(() => {
    axios.get(process.env.REACT_APP_BE_URL + "users/show/id?id=" + id)
      .then((res) => {
        // console.log(res);
        // console.log(res.data.data[0]);
        setUserName(res.data.data[0].name);
        setAvatar(res.data.data[0].avatar);
      })
      .catch((e) => console.log(e.message))
  }); 
    
    // console.log(showAvatar);
    // console.log(avatar);
    // if(avatarUser){
    //   showAvatar = avatarUser;
    // }
    // console.log(`${process.env.REACT_APP_BE_URL}${avatar}`);

  return (
    <>
    <NavbarPage />

    <Container className="mt-4">
      <Image src={`${process.env.REACT_APP_BE_URL}${avatar}`} alt='user avatar' className="avatar center" />
      <h5 className="mt-2 mb-5 text-center">{userName}</h5>
    </Container>
      
    <Container className="mt-4">
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/selfrecipe" disabled>My Recipe</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/saved" disabled>Saved Recipe</Nav.Link>
        {/* <Nav.Link eventKey="link-1">Save Recipe</Nav.Link> */}
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/liked" disabled>Liked Recipe</Nav.Link>
      </Nav.Item>
    </Nav>
    </Container>

    <hr/>
        
    <FooterBottom />
    </>
  );
}