import { Container,Row, Col } from 'react-bootstrap';
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import NavbarPage from "../components/organism/NavbarPage";
import NewRecipeForm from "../components/organism/NewRecipeForm";
import FooterTop from "../components/organism/FooterTop";
import FooterBottom from "../components/organism/FooterBottom";

export default function NewRecipe() {
  let navigate = useNavigate();
  const reduxconst = useSelector(state => state);

  React.useEffect(() => {
    if (reduxconst.auth.isLogin == false) {
      navigate("/login");
    }
  }, []);
  
  return (
    <>
    <div className='NewRecipe'>
      <NavbarPage />

      <Container>
        <h1 className="my-5 text-center">Add Your New Recipe</h1>
        <Row className="mt-5">
          <Col></Col>
          <Col md={10}>
            <NewRecipeForm />
          </Col>
          <Col></Col>
        </Row>
      </Container>

      <FooterTop />
      <FooterBottom />
    </div>
    </>
  );
};