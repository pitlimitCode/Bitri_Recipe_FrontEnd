import {
  Form,
  Button
} from 'react-bootstrap';
import React from "react";

function RegisterForm() {
  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      window.location.href = "/";
    }
  }, []);

  return (
      <Form className='registerForm'>

        <p className='title'>Let’s Get Started !!!</p>
        <p className='descForm'>Create New Account</p>
        <p classNmae='descForm'>to Access All Features</p>

          <div className='textLeft'>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label className='fontLabel'>Name</Form.Label>
            <Form.Control size="sm" type="name" placeholder="Name" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className='fontLabel'>Email address*</Form.Label>
            <Form.Control size="sm" type="email" placeholder="Enter Email Adress" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
            <Form.Label className='fontLabel'>Phone Number</Form.Label>
            <Form.Control size="sm" type="phone_number" placeholder="08xxxxxxxxx" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className='fontLabel'>Create new Password</Form.Label>
            <Form.Control size="sm" type="password" placeholder="Create new Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className='fontLabel'>New Password</Form.Label>
            <Form.Control size="sm" type="password" placeholder="New Password" />
          </Form.Group>
          </div>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check className='fontLabel' type="checkbox" label="I agree to terms & conditions" />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button variant="primary" type="submit" className="button">
            Submit
          </Button>
        </div>

        <p className='descBottomForm'>Already have account? <a className="yellowIt" href="login">Log in Here</a></p>

      </Form>
  );
}

export default RegisterForm;