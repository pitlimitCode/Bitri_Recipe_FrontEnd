import {
  Navbar, 
  Nav, 
} from 'react-bootstrap';
import React from "react";
import axios from "axios";
// import HomeSearchRecipe from './HomeSearchRecipe';

function NavbarPage() {

  const handleToProfile = () => {
    axios.get("http://localhost:8000/users/getid")
      .then(res => {
        console.log(res.data);
        window.location.href = "http://localhost:8000/users/show/id?id=" + res.data.id;
      })
      .catch(err => console.log(err))
  }

  // Remove data at local storage, because Log Out
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    window.location.href = "/login";
  };


  var nameProfile = [];
  var rightNavbar = [];
  if (localStorage.getItem("name")) { 
    nameProfile.push( <Nav.Link nameClass="navlink" onClick={handleToProfile}>
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