import React from "react";
// import axios from "axios";
import {
  Col,
} from 'react-bootstrap';

import newestRecipe from '../../assets/newestRecipe.png';


export default function HomeAllRecipe() {
  return (
    <>
    <Col>
      <img src={newestRecipe} className="pic100" alt="search pic"></img>
    </Col>
    <Col>
      <img src={newestRecipe} className="pic100" alt="search pic"></img>
    </Col>
    <Col>
      <img src={newestRecipe} className="pic100" alt="search pic"></img>
    </Col>
    </>
  );
}
