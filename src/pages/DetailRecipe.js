import { 
  Container,
  Row, 
  Col, 
  Button, 
  Form,
} from 'react-bootstrap';

import React from 'react';
import axios from "axios";

import NavbarPage from "../components/organism/NavbarPage";
import FooterTop from "../components/organism/FooterTop";
import FooterBottom from "../components/organism/FooterBottom";

import defaultDetailRecipe from '../assets/default/detailRecipe.png';

import { useLocation } from 'react-router-dom';

export default function DetailRecipe() {
  const search = useLocation().search;
  const id = new URLSearchParams(search).get('id');
  // console.log(id);
  
  const [recipeName, setRecipeName] = React.useState("");
  const [recipeImage, setRecipeImage] = React.useState("");
  const [recipeIngre, setRecipeIngre] = React.useState("");
  const [recipeSteps, setRecipeSteps] = React.useState("");
  let showImageRecipe = defaultDetailRecipe;

  React.useEffect(() => {
    axios.get(process.env.REACT_APP_BE_URL + "recipes/show/id?id=" + id)
      .then((res) => {
        // console.log(res);
        // console.log(res.data[0]);

        // id_user: 3
        // video: null

        setRecipeName(res.data[0].name);
        setRecipeImage(res.data[0].image);
        setRecipeIngre(res.data[0].ingredients);
        setRecipeSteps(res.data[0].step);
      })
      .catch((e) => console.log(e.message))
    }); 
    
    // console.log(showImageRecipe);
    // console.log(recipeImage);
    if(recipeImage){
      showImageRecipe = recipeImage;
    }

  return (
    <>
      <NavbarPage />
      <div className='detailRecipe'>
        <Container>
          <Row>
            <Col></Col>
            <Col md={9} className='mx-auto'>
              <h1 className="mb-5 mt-3">{recipeName}</h1>
              <img src={showImageRecipe} alt="recipe pic" className="detailRecipeImage mb-5"></img>

              <h4 className="textLeft">Ingredients</h4>
              <p className="textLeft mb-5">{recipeIngre}</p>

              <h4 className="textLeft">Steps</h4>
              <p className="textLeft mb-5 ">{recipeSteps}</p>

              <Form className="mb-5" >
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" placeholder="Comment here ..." rows={5} />
                </Form.Group>
                <Button variant="primary" type="submit" className="button">
                  Submit
                </Button>
              </Form>

            <h4 className="textLeft">Comment</h4>
            {/* <p className="textLeft">pic</p>
            <p className="textLeft">comment</p> */}
            </Col>

            <Col></Col>
          </Row>
        </Container>
      </div>
      <FooterTop/>
      <FooterBottom/>
    </>

  );
}