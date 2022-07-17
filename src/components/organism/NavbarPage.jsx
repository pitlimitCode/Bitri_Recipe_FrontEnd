import {
  Navbar, 
  Nav, 
} from 'react-bootstrap';
import React from "react";
import axios from "axios";

function NavbarPage() {
  // Log Out = Remove data in local storage.
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    window.location.href = "/login";
  };

  // Link to self user profile

  // const activeToken = () => {
  // Error verify type: jwt expired.  
  // }

  const handleToProfile = () => {
    axios.get(process.env.REACT_APP_BE_URL + "users/getid")
      .then(res => {
        // console.log(res);
        console.log(res.data.id);

        // if (res.reqsuest.response) {}

        // window.location.href = "http://localhost:8000/users/show/id?id=" + res.data.id;
        window.location.href = "http://localhost:3000/profile/?id=" + res.data.id;
      })
      .catch(err => {
        console.log(err.headers.request.response);
        // console.log(err)
      })
  }

  var nameProfile = [];
  var rightNavbar = [];
  if (localStorage.getItem("name")) { 
    nameProfile.push( <Nav.Link nameClass="navlink" 
                        // href="profile"
                        onClick={handleToProfile} ////////////////////
                      >
                        Welcome, {localStorage.getItem("name")}.
                      </Nav.Link>);
    rightNavbar.push(<Nav.Link nameClass="navlink" onClick={handleLogout}>Logout</Nav.Link>);
    
  } else {
    nameProfile.push(<Nav.Link nameClass="navlink" href="profile">Profile</Nav.Link>);
    rightNavbar.push(<Nav.Link nameClass="navlink" href="login">Login</Nav.Link>);
    rightNavbar.push(<Nav.Link nameClass="navlink" href="register">Register</Nav.Link>);
  }

  return (
    <>
      <Navbar bg="transparent" variant="light">
        <Nav className="me-auto">
          <Nav.Link nameClass="navlink" href="/">Home</Nav.Link>
          <Nav.Link nameClass="navlink" href="newrecipe">Add Recipe</Nav.Link>
          {nameProfile} 
        </Nav>
        <Nav>
          {rightNavbar}
        </Nav>
      </Navbar>
    </>
  );
}

export default NavbarPage;