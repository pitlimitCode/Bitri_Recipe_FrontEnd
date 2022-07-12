import { 
  Row, 
} from 'react-bootstrap';
import React from "react";
// import axios from "axios";

import NavbarPage from "../components/organism/NavbarPage";
import FooterTop from "../components/organism/FooterTop";
import FooterBottom from "../components/organism/FooterBottom";
import HomeSearchRecipe from '../components/organism/HomeSearchRecipe';
import HomeNewestRecipe from '../components/organism/HomeNewestRecipe';
import HomeAllRecipe from '../components/organism/HomeAllRecipe';

function LandingPage() {

  return (
    <div className='landingPage'>
      <Row className="mb-4">
        <NavbarPage />
      </Row>
      
      <Row className="mb-5">
        <HomeSearchRecipe />
      </Row>

      <Row className="mb-4">
        <h4>New Recipe</h4>
      </Row>
      <Row className="mb-5">
        <HomeNewestRecipe />
      </Row>

      <Row className="mb-4">
        <h4>All recipe</h4>
      </Row>
      <Row className="mb-4">
        <HomeAllRecipe />
      </Row>

      <FooterTop />
      <FooterBottom />
    </div>
  );
}

export default LandingPage;