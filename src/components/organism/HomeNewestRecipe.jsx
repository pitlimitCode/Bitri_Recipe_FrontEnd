import React from "react";
// import axios from "axios";
import {
  Col,
  Button,
} from 'react-bootstrap';

import newestRecipe from '../../assets/newestRecipe.png';


export default function HomeNewestRecipe() {
  return (
    <>
    <Col md={6}>
      <img src={newestRecipe} className="pic100" alt="search pic"></img>
    </Col>
    <Col md={1}></Col>
    <Col md={5}>
      <div className='centering textLeft'>
        <h3>NEW_RECIPE_NAME</h3>
        <p>STEP_COOK_RECIPE</p>
        <Button variant="primary" type="submit" className="button" href="/detailrecipe">
          Learn More
        </Button>
      </div>
    </Col>
    </>
  );
}
