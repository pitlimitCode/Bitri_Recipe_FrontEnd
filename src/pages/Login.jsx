// import loginImage from './loginImage.png';
import './Login.css';
import Container from 'react-bootstrap/Container';
import {Row, Col, Form, Button} from 'react-bootstrap';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

function Login() {
  return (
    <Container>
      <div className='login'>
        <Row>
          <Col>
            <div className='left'>
              {/* <img src={loginImage} className="loginImage" alt="loginImage" /> */}
            </div>
          </Col>
          <Col>
            <div className='rigth'>

              <div className='form'>
                
                <Form>
                  <p className='title'>Welcome</p>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>

                </Form>
              
              </div>



            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Login;