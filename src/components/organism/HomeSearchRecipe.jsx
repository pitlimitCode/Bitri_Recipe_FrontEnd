import {
  Col, 
  Button, 
  Form,
} from 'react-bootstrap';

import React from "react";
// import axios from "axios";

import searchImage from '../../assets/searchImage.png';


export default function HomeSearchRecipe() {
  // const [listPhoto, setListPhoto] = React.useState([]);
  // const [isLoading, setIsLoading] = React.useState([]);
  // const [recipeData, setRecipeData] = React.useState(null);


//  React.useEffect(() => {
//     axios.get("http://localhost:8000/recipes/show/name")
//       .then((response) => {
//         setRecipeData(response.data.data[0]);
//         // setListPhoto(res.data);
//         // setTimeout(() => {
//         //   setIsLoading(false);
//         // }, 10000);
//       })
//   });

  // console.log(recipeData)

  return (
    <>
      <Col md={5}>



        <div className='centering textLeft'>
          <h1 className='textLeft'>Discover Recipe</h1>
          <h1 className='textLeft'>& Delicious Food</h1>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="text" placeholder="Search recipe" />
          </Form.Group>
          <Button variant="primary" type="submit" className="button">
            Submit
          </Button>
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