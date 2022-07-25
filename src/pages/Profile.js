import {
  Nav,
  Image,
} from 'react-bootstrap';

import React from 'react';
import axios from "axios";

import NavbarPage from "../components/organism/NavbarPage";
import FooterBottom from "../components/organism/FooterBottom";

import defaultAvatar from '../assets/defaultAvatar.jpg';

import { useLocation } from 'react-router-dom';

export default function Profile() {
  
  const search = useLocation().search;
  const id = new URLSearchParams(search).get('id');
  // console.log(id);
  
  const [userName, setUserName] = React.useState("");
  const [avatar, setAvatar] = React.useState("");
  let showAvatar = defaultAvatar;

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
    if(avatar){
      showAvatar = avatar;
    }

  return (
    <div className="Profile">
      <NavbarPage />

      <Image src={showAvatar} alt='user avatar' className="avatar" />
      <h5 className="mt-3">{userName}</h5>
      
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