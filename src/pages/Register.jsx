import {
  Row, 
} from 'react-bootstrap';
import LeftloginRegis from "../components/organism/LeftloginRegis";
import RegisterForm from "../components/organism/RegisterForm";

function Register() {
  return (
    <div className='register'>
      <Row>
          <LeftloginRegis />
          <RegisterForm />
      </Row>
    </div>
  );
}

export default Register;