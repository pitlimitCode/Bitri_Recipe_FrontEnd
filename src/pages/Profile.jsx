import {
  Nav,
} from 'react-bootstrap';

import React from 'react';
import axios from "axios";

import NavbarPage from "../components/organism/NavbarPage";
import FooterBottom from "../components/organism/FooterBottom";
import defaultAvatar from '../assets/defaultAvatar.jpg';

function Profile() {
  
  // const [idRecipe, setidRecipe] = React.useState([]);
  // const [url, setUrl] = React.useState([]);
  // const [recipe, setRecipe] = React.useState([]);
  // const [user, setUser] = React.useState([]);
  // const [imageUpdate, setImageUpdate] = React.useState([]); ///
  
  React.useEffect(() => {

    // const [id, setId] = React.useState("");
    // const [name, setName] = React.useState("");
    // const [avatar, setAvatar] = React.useState("");

    axios.get("http://localhost:8000/users/show/id", {
      // id: res.data.id
    })
      .then((res) => {
        console.log(res.data.data[0]);
        // setId(res.data.data[0].id_recipe);
        // setName(res.data.data[0].name_recipe);
        // setAvatar(res.data.data[0].name);
        
      })
      .catch((e) => console.log(e.message))
  });

  return (
    <div className="Profile">
      <NavbarPage />

      {/* <img src={avatar} alt='user avatar' className="avatar"></img> */}
      <img src={defaultAvatar} alt='user avatar' className="avatar"></img>
      {/* <Image src={defaultAvatar} rounded ></Image> */}
      <h5 className="mt-3">{localStorage.getItem("name")}</h5>
      
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