import {
  Row,
  Col,
  Button,
  Image,
	Spinner,
} from 'react-bootstrap';
import React from "react";
import axios from "axios";

export default function HomeNewestRecipe() {
  // const [listPhoto, setListPhoto] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState([]);
  
  const [url, setUrl] = React.useState([]);
  const [recipe, setRecipe] = React.useState([]);
  const [user, setUser] = React.useState([]);
  const [imageUpdate, setImageUpdate] = React.useState([]);
  
  React.useEffect(() => {
    setIsLoading(true);
    axios.get(process.env.REACT_APP_BE_URL + "/recipes/fivenew")
      .then((res) => {
        // setidRecipe(res.data.data[0].id_recipe);
        setUrl(process.env.REACT_APP_FE_URL + "/detailrecipe/?id=" + res.data.result.data[0].id_recipe);
        setRecipe(res.data.result.data[0].name_recipe);
        setUser(res.data.result.data[0].name);
        setImageUpdate(res.data.result.data[0].image_recipe); /////

        // console.log(res.data.result.data[0]);
        // console.log(res.data.data[1].image_recipe);

        // file:///E:/p/Bitri_Recipe_Web/images/food_images/foodImage_7.jpeg
        // http://localhost:8000/images/food_images/foodImage_7.jpeg

        // setTimeout(() => {
          // setIsLoading(false);
        // }, 1500);
      })
      .catch((err) => {
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    //  {isLoading ? (
      
    //       <Col lg={4}>
    //         <Image={ "https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif" }/>
    //       </Col>
      
    // ) : ( 
      
    //     <Col md={4}>
    //       <Image src={listData.image} className="pic100" alt="search pic" />
    //       <div className="bottom-left-text">{listData.name} </div>
    //     </Col>
    //     <Col md={4} className ="parentImagePages">
    //       <Image src={data.image} className="pic100" alt="search pic" />
    //       <div className="bottom-left-text">{data.name} </div>
    //     </Col>
      
    //  )} 

    <Row>
      {isLoading 
        ? (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <>
            <Col xs={6} md={6} className ="parentImagePages">
              <Image 
                src={`${process.env.REACT_APP_BE_URL}/${imageUpdate}`} 
                alt="search pic" 
                className="pic100" 
              />
            </Col>
            <Col xs={1} md={1}></Col>
            <Col xs={5} md={5}>
              <div className='centering textLeft'>
                <h1>{recipe}</h1>
                <p>Recipe by {user}</p>
                <Button
                  variant="primary"
                  type="button"
                  className="button"
                  href={url}
                >
                  Look This Recipe
                </Button>
              </div>
            </Col>
          </>

        )
      }

    </Row>
  );
}
