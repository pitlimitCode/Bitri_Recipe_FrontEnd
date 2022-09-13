import {
  Form,
  Button,
  Alert,
} from 'react-bootstrap';
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  let navigate = useNavigate();
  const [isError, setIsError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phonenumber, setPhoneNumber] = React.useState("");
  const [pass1, setPass1] = React.useState("");
  const [pass2, setPass2] = React.useState("");

  const handleRegister = () => {
    setIsLoading(true);
    axios
      .post(process.env.REACT_APP_BE_URL + "/users/add", {
        name: name,
        email: email,
        phone_number: phonenumber,
        password: pass1,
        password2: pass2,
      })
      .then((res) => {
        setIsError(false);
        
        if (res.data.isValid){
          navigate("/login");
        } else {
          setIsError(true);
          setErrorMsg(res?.data.message);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <div className='registerForm'>
        <p className='title'>Let’s Get Started !!!</p>
        <p className='descForm'>Create New Account</p>
        <p className='descForm'>to Access All Features</p>

        {/* Alert error message */}
        {isError 
          ? <Alert variant="danger" className="text-center">{errorMsg}</Alert> 
          : null
        } 

        <Form onSubmit={(e) => e.preventDefault()}>
          <div className='textLeft'>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className='fontLabel'>Name</Form.Label>
              <Form.Control size="sm" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className='fontLabel'>Email address*</Form.Label>
              <Form.Control size="sm" type="email" placeholder="Enter Email Adress" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
              <Form.Label className='fontLabel'>Phone Number</Form.Label>
              <Form.Control size="sm" type="number" placeholder="08xxxxxxxxx" onChange={(e) => setPhoneNumber(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword1">
              <Form.Label className='fontLabel'>Create new Password</Form.Label>
              <Form.Control size="sm" type="password" placeholder="Create new Password" onChange={(e) => setPass1(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword2">
              <Form.Label className='fontLabel'>New Password</Form.Label>
              <Form.Control size="sm" type="password" placeholder="New Password" onChange={(e) => setPass2(e.target.value)} />
            </Form.Group>
          </div>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check className='fontLabel' type="checkbox" label="I agree to terms & conditions" />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button 
              variant="primary" 
              type="button" 
              className="button" 
              disabled={isLoading}
              onClick={handleRegister}
            >
              {isLoading ? "Loading..." : "Register"}
            </Button>
          </div>
        </Form>

        <p className='descBottomForm'>Already have account? <a className="yellowIt" href="login">Log in Here</a></p>

      </div>
      </>
  );
}

export default RegisterForm;