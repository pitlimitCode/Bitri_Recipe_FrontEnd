import {
  Row,
  Col,
} from 'react-bootstrap';
import LeftloginRegis from "../components/organism/LeftloginRegis";
import LoginForm from "../components/organism/LoginForm";

function Login() {
  return (
    <div className='login'>
      <Row>
        <Col>
          <LeftloginRegis />
        </Col>
        <Col>
          <LoginForm />
        </Col>
      </Row>
    </div>
  );
}

export default Login;