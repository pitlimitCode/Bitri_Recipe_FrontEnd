import {
  Row,
  Col,
} from 'react-bootstrap';
import React from "react";

import AuthLeft from "../components/organism/AuthLeft";
import LoginForm from "../components/organism/LoginForm";

function Login() {
  return (
    <>
    <Row className='loginregister'>
      <Col className="d-none d-md-block">
        <div className="left">
          <AuthLeft />
        </div>
      </Col>
      <Col sm={{ order: 'last' }} className="right">
        <Row>
          <Col></Col>
          <Col xs={9}> <LoginForm /> </Col>
          <Col></Col>
        </Row>
      </Col>
    </Row>
    </>
  );
}

export default Login;