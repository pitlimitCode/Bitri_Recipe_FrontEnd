import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import React from "react";

function FooterTop() {
  return (
    <>
    <div className='bgYellow mt-5'>
      <Container>
      <Row className='pt-5 text-center'>
        <Col className="mb-5">
          <h1>Eat, Cook, Repeat</h1>
          <p className='footerP' style={{fontSize:'14px'}}>Share your best recipe by uploading here !</p>
        </Col>
      </Row>
      </Container>
    </div>
    </>
  );
}

export default FooterTop;