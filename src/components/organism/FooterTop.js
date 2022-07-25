import {
  Row,
  Col,
} from 'react-bootstrap';
import React from "react";

function FooterTop() {
  return (
    <>
    <Row className='footerTop'>
      <Row className='pt-5'>
        <Col></Col>
        <Col className="mb-5">
          <h1>Eat, Cook, Repeat</h1>
          <p className='footerP'>Share your best recipe by uploading here !</p>
        </Col>
        <Col></Col>
      </Row>
    </Row>
    </>
  );
}

export default FooterTop;