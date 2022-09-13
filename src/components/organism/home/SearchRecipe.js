import {
  Col, 
  Button, 
  Form,
  Image,
} from 'react-bootstrap';

import React from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import searchRecipe from '../../../assets/default/searchRecipe.png';

export default function HomeSearchRecipe() {
  
  // Set random image untuk HomeSearch?
  // const [imageRandom, setImageRandom] = React.useState([]);
  // React.useEffect(() => {
  //   axios.get(process.env.REACT_APP_BE_URL + "/recipes/fivenew")
  //     .then((res) => {
  //       setImageRandom(res.data.data[2].image_recipe);
  //     } )
  //     .catch((err) => {console.log(err)})
  // });

  let navigate = useNavigate();
  const [searching, setSearching] = React.useState([]);
  const linkSearchByName = () => {
    navigate(`/search/?name=${searching}`);
  };

  return (
    <>
      <Col xs={5} md={5}>
        <div className='centering textLeft'>
          <h1 className='textLeft'>Discover Recipe</h1>
          <h1 className='textLeft'>& Delicious Food</h1>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group className="mb-3" controlId="formSearch">
              <Form.Control type="search" placeholder="Search recipe" onChange={(e) => setSearching(e.target.value)} />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="button"
              onClick={linkSearchByName}
            >
              Submit
            </Button>
          </Form>
        </div>
      </Col>
      <Col xs={1} md={1}></Col>
      <Col xs={6} md={6}>
          <Image src={searchRecipe} className="pic100" alt="search pic" />
      </Col>
    </>
  );
}