import { 
  Container,
  Row, 
  Col, 
  Image,
	Spinner,
  Button,
} from 'react-bootstrap';

import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import NavbarPage from "../components/organism/NavbarPage";
import FormComment from "../components/organism/FormComment";
import CommentersInARecipe from "../components/organism/CommentersInARecipe";
import FooterTop from "../components/organism/FooterTop";
import FooterBottom from "../components/organism/FooterBottom";

import { useLocation } from 'react-router-dom';

export default function DetailRecipe() {
  let navigate = useNavigate();
  const search = useLocation().search;
  const id = new URLSearchParams(search).get('id');
  // console.log(id);
  const [recipeId, setRecipeId] = useState("");
  const [recipeByIdUser, setRecipeByIdUser] = useState("");
  const [recipeName, setRecipeName] = useState("");
  const [recipeImage, setRecipeImage] = useState("");
  const [recipeIngre, setRecipeIngre] = useState("");
  const [recipeSteps, setRecipeSteps] = useState("");
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_BE_URL + "/recipes/id/" + id)
      .then((res) => {
        // console.log(res);
        // video: null
        
        // console.log(res.data.data[0]);
        // console.log("ingredients text: ", res.data.data[0].ingredients);
        // console.log(JSON.parse(res.data.data[0].ingredients));

        setRecipeId(res.data.data[0].id);
        setRecipeByIdUser(res.data.data[0].id_user);
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
      }, [recipeImage]);
  }); 

  // CHECK USER IF NOT LOGIN = DID'T SHOW COMMENT BOX
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);


  // AXIOS USER - GET ID
  const [IdUser, setIdUser] = React.useState("");
  axios.get(process.env.REACT_APP_BE_URL + "/users/getid")
    .then( async (res) => {
      // console.log(res);
      setIdUser(res.data.id)
    }).catch((e) => console.log(e.message));

  return (
    <>
      <NavbarPage />
      <div className='detailRecipe'>
        <Container>
          <Row>
            <Col></Col>
            <Col md={9} className='mx-auto'>
              <h1 className="mt-4 mb-2 text-center">{recipeName}</h1>

              {/* BUTTON TO EDIT / DELETE RECIPE */}
              {isLoading 
                ? ( null
                ) : (
                  (recipeByIdUser == IdUser) 
                  ? (
                    <Link to={`/editrecipe/?id=${recipeId}`}>
                      <Button variant="outline-success" size="sm" className='my-2 center'> edit / delete ? </Button>
                    </Link>
                  ) : ( null ) 
                )
              }

              {isLoading 
                ? (
                  <div className="text-center">
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  </div>
                ) : (
                <Row className='mb-5'>
                  <Col md={1}/>

                  {/* IMAGE RECIPE */}
                  <Col md={10}>
                    <Image src={`${process.env.REACT_APP_BE_URL}/${recipeImage}`} alt="recipe pic" className="detailRecipeImage center"></Image>
                  </Col>

                  {/* BUTTON DELETE RECIPE */}
                  <Col md={1}/>

                </Row>
                )
              }

              <h4 className="textLeft">Ingredients</h4>
              <p className="textLeft mb-5">{recipeIngre}</p>

              <h4 className="textLeft">Steps</h4>
              <p className="textLeft mb-5 ">{recipeSteps}</p>

            {isLogin ? (
              <FormComment recipeId={id} />
            ) : (
              null
            )}

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