import {
  Container,
  Navbar, 
  Nav, 
} from 'react-bootstrap';
import React, {useState, useEffect} from "react";
// import axios from "axios";

export default function NavbarPage() {
  // Log Out = Remove data in local storage.
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    window.location.href = "/login";
  };

  const handleToProfile = () => {
    // axios.get(process.env.REACT_APP_BE_URL + "/users/getid")
    //   .then(res => {
    //     // console.log(res);
    //     console.log(res.data.id);

        // window.location.href = "http://localhost:8000/users/id/" + res.data.id;
        // window.location.href = process.env.REACT_APP_FE_URL + "3000/profile/?id=" + res.data.id;

        window.location.href = process.env.REACT_APP_FE_URL + "/profile";

    //    })
    //    .catch(err => {
    //      console.log(err)
    //    })
  }

  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('name')) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);
  
  return (
    <div className="bgYellow">
      <Container>


      {isLogin ? (
        <Navbar className="textcolor1">
          <Nav className="me-auto">
            <Nav.Link className="navlink textcolor1" href="/">Home</Nav.Link>
            <Nav.Link className="navlink textcolor1" href="/newrecipe">Add Recipe</Nav.Link>
            <Nav.Link className="navlink textcolor1" 
              href="/profile"
              // onClick={handleToProfile}
            >
              Welcome, {localStorage.getItem("name")}.
            </Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link className="navlink textcolor1" onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar>
      ) : (
        <Navbar variant="light">
          <Nav className="me-auto">
            <Nav.Link className="navlink textcolor1" href="/">Home</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="navlink textcolor1" href={`${process.env.REACT_APP_FE_URL}/login`}>Login</Nav.Link>
            <Nav.Link className="navlink textcolor1" href={`${process.env.REACT_APP_FE_URL}/register`}>Register</Nav.Link>
          </Nav>
        </Navbar>
      )}
      </Container>
    </div>
  );
}