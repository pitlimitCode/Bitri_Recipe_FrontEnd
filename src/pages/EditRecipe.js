import { 
  Container,
  Row, 
  Col, 
} from 'react-bootstrap';
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import NavbarPage from "../components/organism/NavbarPage";
import EditRecipeForm from "../components/organism/EditRecipeForm";
import FooterTop from "../components/organism/FooterTop";
import FooterBottom from "../components/organism/FooterBottom";

import { useLocation } from 'react-router-dom';

function EditRecipe() {
  let navigate = useNavigate();
  const reduxconst = useSelector(state => state);
  const search = useLocation().search;
  const id = new URLSearchParams(search).get('id');

  React.useEffect(() => {
    if (reduxconst.auth.token == false) {
      navigate("/login");
    }
  }, []);

  return (
    <>
    <div className='NewRecipe'>
      <NavbarPage />
      
      <Container>
        <h1 className="my-5 text-center">Edit Your Recipe</h1>
        <Row className="mt-5">
          <Col></Col>
          <Col md={10}>
            <EditRecipeForm id_recipe={id}/>
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

export default EditRecipe;