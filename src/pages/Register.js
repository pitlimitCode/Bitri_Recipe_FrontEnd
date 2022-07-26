import {
  Container,
  Row, 
  Col,
} from 'react-bootstrap';
import React from "react";

import AuthLeft from "../components/organism/AuthLeft";
import RegisterForm from "../components/organism/RegisterForm";

function Register() {
  return (
    <>
    <Container>
    <Row className='loginregister'>
      <Col className="d-none d-md-block">
        <div className="left">
          <AuthLeft />
        </div>
      </Col>
      <Col sm={{ order: 'last' }} className="right">
        <Row>
          <Col></Col>
          <Col xs={9}> <RegisterForm /> </Col>
          <Col></Col>
        </Row>
      </Col>
    </Row>
    </Container>
    </>
  );
}

export default Register;