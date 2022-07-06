// import loginImage from './loginImage.png';
import './Register.css';
import Container from 'react-bootstrap/Container';
import {Row, Col, Form, Button} from 'react-bootstrap';

function Register() {
  return (
    <Container>
      <div className='register'>
        <Row>
          <Col>
            <div className='left'>
              {/* <img src={loginImage} className="loginImage" alt="loginImage" /> */}
            </div>
          </Col>
          <Col>
            <div className='right'>
            
              <Row>
                <Col></Col>
                <Col xs={6}>
                

                  <div className='form'>
                  
                    <Form>
                      <p className='title'>Let’s Get Started !!!</p>
                      <p className='descForm'>Create new account to access all features</p>
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className='fontLabel'>Name</Form.Label>
                        <Form.Control size="lg" type="name" placeholder="Name" />
                        <Form.Text className="text-muted"></Form.Text>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fontLabel'>Email address*</Form.Label>
                        <Form.Control size="lg" type="email" placeholder="Enter Email Adress" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                        <Form.Label className='fontLabel'>Phone Number</Form.Label>
                        <Form.Control size="lg" type="phone_number" placeholder="08xxxxxxxxx" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='fontLabel'>Create new Password</Form.Label>
                        <Form.Control size="lg" type="password" placeholder="Create new Password" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='fontLabel'>New Password</Form.Label>
                        <Form.Control size="lg" type="password" placeholder="New Password" />
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
                      <p className='signUp'>Already have account? <span className="signuplink">Log in Here</span></p>

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

export default Register;