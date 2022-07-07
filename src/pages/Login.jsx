import loginImage from './loginImage.png';
import './Login.css';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

function Login() {
  return (
    <Container>
      <div className='login'>
        <Row>
          <Col>
            <div className='left'>
              <img src={loginImage} className="loginImage" alt="loginImage" />
            </div>
          </Col>
          <Col>
            <div className='right'>
            
              <Row>
                <Col></Col>
                <Col xs={6}>
                

                  <div className='form'>
                  
                    <Form>
                      <p className='title'>Welcome</p>
                      <p className='descForm'>Log in into your exiting account</p>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fontLabel'>Email</Form.Label>
                        <Form.Control size="lg" type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted"></Form.Text>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='fontLabel'>Password</Form.Label>
                        <Form.Control size="lg" type="password" placeholder="Password" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check className='fontLabel' type="checkbox" label="I agree to terms & conditions" />
                      </Form.Group>

                      
                      <div className="d-grid gap-2">
                        <Button variant="primary" type="submit" className="button" size="lg">
                          Submit
                        </Button>
                      </div>
                      
                      <p className='forgotPassword'>Forgot password?</p>
                      <p className='signUp'>Don’t have an account? <span className="signuplink">Sign Up</span></p>

                    </Form>
                
                  </div>


                </Col>
                <Col></Col>
              </Row>

            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Login;