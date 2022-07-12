import {
  Col, 
  Button, 
  Form,
} from 'react-bootstrap';

import React from "react";
import searchImage from '../../assets/searchImage.png';

export default function HomeSearchRecipe() {
  const [searching, setSearching] = React.useState([]);
  const linkToName = () => {
    window.location.href = "http://localhost:8000/recipes/show/name?name=" + searching;
  };

  return (
    <>
      <Col md={5}>

        <div className='centering textLeft'>
          <h1 className='textLeft'>Discover Recipe</h1>
          <h1 className='textLeft'>& Delicious Food</h1>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="search" placeholder="Search recipe" onChange={(e) => setSearching(e.target.value)} />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="button"
              // disabled={isLoading}
              onClick={linkToName}
            >
              Submit
            </Button>
          </Form>
        </div>
      </Col>

      <Col md={1}>
        {/* <h1>{recipeData}</h1> */}
      </Col>

      <Col md={6}>
        <img src={searchImage} className="pic100" alt="search pic"></img>
      </Col>
    </>
  );
}