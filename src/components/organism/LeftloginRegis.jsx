import loginImage from '../../assets/loginImage.png';
import {
  Col,
} from 'react-bootstrap';

function LeftloginRegis() {
  return (
    <Col>
      <div className='left'>
        <img src={loginImage} className="loginImage" alt="loginImage" />
      </div>
    </Col>
  );
}

export default LeftloginRegis;