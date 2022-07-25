import {
  Row, 
  Col,
} from 'react-bootstrap';
import React from "react";

import LeftloginRegis from "../components/organism/LeftloginRegis";
import RegisterForm from "../components/organism/RegisterForm";

function Register() {
  return (
    <>
    <Row className='loginregister'>
      <Col className="d-none d-md-block">
        <div className="left">
          <LeftloginRegis />
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
    </>
  );
}

export default Register;