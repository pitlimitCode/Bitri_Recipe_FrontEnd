import { 
  Container,
  Row, 
  Col, 
  Image,
	Spinner,
} from 'react-bootstrap';

import React from 'react';
import axios from "axios";

import NavbarPage from "../components/organism/NavbarPage";
import FormComment from "../components/organism/FormComment";
import CommentersInARecipe from "../components/organism/CommentersInARecipe";
import FooterTop from "../components/organism/FooterTop";
import FooterBottom from "../components/organism/FooterBottom";

import { useLocation } from 'react-router-dom';

export default function DetailRecipe() {
  const search = useLocation().search;
  const id = new URLSearchParams(search).get('id');
  // console.log(id);
  const [recipeName, setRecipeName] = React.useState("");
  const [recipeImage, setRecipeImage] = React.useState("");
  const [recipeIngre, setRecipeIngre] = React.useState("");
  const [recipeSteps, setRecipeSteps] = React.useState("");
  const [isLoading, setIsLoading] = React.useState([]);

  React.useEffect(() => {
    axios.get(process.env.REACT_APP_BE_URL + "/recipes/id/" + id)
      .then((res) => {
        // console.log(res);
        // video: null
        
        // console.log(res.data.data[0]);
        console.log(res.data.data[0].ingredients);
        // console.log(JSON.parse(res.data.data[0].ingredients));

        setRecipeName(res.data.data[0].name);
        setRecipeImage(res.data.data[0].image);
        setRecipeIngre(res.data.data[0].ingredients);
        setRecipeSteps(res.data.data[0].step);
      })
      .catch((e) => {
        console.log(e.message)
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      }, []);
  }); 

  return (
    <>
      <NavbarPage />
      <div className='detailRecipe'>
        <Container>
          <Row>
            <Col></Col>
            <Col md={9} className='mx-auto'>
              <h1 className="my-4 text-center">{recipeName}</h1>

              <Row className='mb-5'>
                <Col md={1}/>

                <Col md={10}>
                {isLoading 
                  ? (
                    <div className="text-center">
                      <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    </div>
                  ) : (
                    <Image src={`${process.env.REACT_APP_BE_URL}/${recipeImage}`} alt="recipe pic" className="detailRecipeImage center"></Image>
                  )
                }
                </Col>
                <Col md={1}>

                  {/* ganti gambar auth */}
                </Col>
              </Row>
              <h4 className="textLeft">Ingredients</h4>
              <p className="textLeft mb-5">{recipeIngre}</p>

              <h4 className="textLeft">Steps</h4>
              <p className="textLeft mb-5 ">{recipeSteps}</p>

            <FormComment recipeId={id} />

            <h4 className="textLeft">Comment</h4>
            <CommentersInARecipe recipeId={id} />
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