import { 
  Container,
  Row, 
  Col, 
} from 'react-bootstrap';
import React from "react";

import NavbarPage from "../components/organism/NavbarPage";
import NewRecipeForm from "../components/organism/NewRecipeForm";
import FooterTop from "../components/organism/FooterTop";
import FooterBottom from "../components/organism/FooterBottom";

function NewRecipe() {
  // React.useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     window.location.href = "Login";
  //   }
  // }, []);
  
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
}

export default NewRecipe;