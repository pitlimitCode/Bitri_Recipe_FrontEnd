import {
  Row,
  Col,
} from 'react-bootstrap';
import LeftloginRegis from "../components/organism/LeftloginRegis";
import LoginForm from "../components/organism/LoginForm";

function Login() {
  return (
    <Row className='loginregister'>
      <Col className="d-none d-md-block">
        <div className="left">
          <LeftloginRegis />
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
  );
}

export default Login;