import {
  Form,
  Button,
  Alert
} from 'react-bootstrap';
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Type from "../../redux/auth/type";

function LoginForm() {
  let navigate = useNavigate();
  const dispatch = useDispatch()
  const [isError, setIsError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    setIsLoading(true);
    axios
      .post(process.env.REACT_APP_BE_URL + "/users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.isValid){
          dispatch({
            type: Type.SET_ISLOGIN,
            payload: true
          })
          dispatch({
            type: Type.SET_USERNAME,
            payload: res?.data?.name
          })
          dispatch({
            type: Type.SET_TOKEN,
            payload: res?.data?.token
          })
          navigate("/");
        } else {
          setIsError(true);
          setErrorMsg(res?.data.message);
        }
      // })
      // .catch((err) => {
      //   console.log(err);
      //   setIsError(true);
      //   setErrorMsg(err?.response?.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className='loginForm'>
      {/* Alert error message */}
      {isError 
        ? <Alert variant="danger" className="text-center">{errorMsg}</Alert> 
        : null
      } 
      <Form onSubmit={(e) => e.preventDefault()}>
        <p className='title'>Welcome</p>
        <p className='descForm'>Log in into your exiting account</p>
        <div className='textLeft'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className='fontLabel'>Email</Form.Label>
            <Form.Control size="sm" type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className='fontLabel'>Password</Form.Label>
            <Form.Control size="sm" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
        </div>
        <Form.Group  controlId="formBasicCheckbox">
          <Form.Check className='fontLabel' type="checkbox" name={1} value={1} label="I agree to terms & conditions" required />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button 
            variant="primary" 
            type="submit" 
            className="button" 
            disabled={isLoading}
            onClick={handleLogin}
          >
            {isLoading ? "Loading..." : "Login"}
          </Button>
        </div>
        <p className='descBottomForm'>Forgot password?</p>
        <p className='descBottomForm'>Don’t have an account? <a className="yellowIt" href="/register">Sign Up</a></p>
      </Form>
    </div>
  )
}

export default LoginForm;