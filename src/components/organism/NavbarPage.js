import React from "react";
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as Type from "../../redux/auth/type";

export default function NavbarPage() {
  let navigate = useNavigate();
  const dispatch = useDispatch()
  const reduxconst = useSelector(state => state);

  const handleLogout = () => {
    dispatch({
      type: Type.SET_ISLOGIN,
      payload: false
    })
    dispatch({
      type: Type.SET_USERNAME,
      payload: ''
    })
    dispatch({
      type: Type.SET_TOKEN,
      payload: ''
    })
    navigate("/login");
  };

  return (
    <div className="bgYellow">
      <Container>
        {reduxconst.auth.isLogin ? (
          <Navbar className="textcolor1">
            <Nav className="me-auto">
              <Nav.Link className="navlink textcolor1" href="/">Home</Nav.Link>
              <Nav.Link className="navlink textcolor1" href="/newrecipe">Add Recipe</Nav.Link>
              <Nav.Link className="navlink textcolor1" href="/profile">Welcome, {reduxconst.auth.username}.</Nav.Link>
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