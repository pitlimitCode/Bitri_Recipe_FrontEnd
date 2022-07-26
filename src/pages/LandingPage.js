import React from "react";
import { 
  Container,
  Row, 
} from 'react-bootstrap';

import NavbarPage from "../components/organism/NavbarPage";
import SearchRecipe from '../components/organism/home/SearchRecipe';
import NewestRecipe from '../components/organism/home/NewestRecipe';
import HomeAllRecipe from '../components/organism/home/AllRecipe';
import FooterTop from "../components/organism/FooterTop";
import FooterBottom from "../components/organism/FooterBottom";

function LandingPage() {

  return (
    <>
    <div className='landingPage'>
          <NavbarPage/>
        
      <Container>
        <Row className="my-5">
          <SearchRecipe />
        </Row>

        <Row className="mb-4">
          <h4>New Recipe</h4>
        </Row>
        <Row className="mb-5">
          <NewestRecipe />
        </Row>

        <Row className="mb-4">
          <h4>All recipe</h4>
        </Row>
        <Row className="mb-4">
          <HomeAllRecipe />
        </Row>
      </Container>
    </div>

        <FooterTop />
        <FooterBottom />
        </>
  );
}

export default LandingPage;