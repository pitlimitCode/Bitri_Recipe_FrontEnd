import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getLogin } from "../redux/actions";

export default function Login() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email && password){
      if (state.email == email && state.pass == password) {
        dispatch(getLogin());
        window.location.href = "/tes2";
      } else {
        alert("Credentials did not match");
      }
    }else{
      alert("Wrong Credentials")
    }
  }

  return(
    <section className='section bg-light'>
      <div className='container ht-100 d-flex justify-content-center align-items-center'>
        <div className='card p-2 shadow-lg d-flex card-width-300 justify-content-center align-items-center'>
          <h3 className="mb-3">Login</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email"
              value={email} onChange={(e) => setEmail(e.target.value)}/>
              <Form.Text className="text-muted">
                We will never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" 
              value={password} onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </section>
  )
}