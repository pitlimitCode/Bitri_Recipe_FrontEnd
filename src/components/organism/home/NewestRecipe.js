import {
  Col,
  Button,
  Image
} from 'react-bootstrap';
import React from "react";
import axios from "axios";

import newestRecipe from "../../../assets/default/newestRecipe.png";

export default function HomeNewestRecipe() {
  // const [listPhoto, setListPhoto] = React.useState([]);
  // const [isLoading, setIsLoading] = React.useState([]);
  
  // const [idRecipe, setidRecipe] = React.useState([]);
  const [url, setUrl] = React.useState([]);
  const [recipe, setRecipe] = React.useState([]);
  const [user, setUser] = React.useState([]);
  // const [imageUpdate, setImageUpdate] = React.useState([]);
  
  React.useEffect(() => {
    axios.get(process.env.REACT_APP_BE_URL + "recipes/show/new")
      .then((res) => {
        // setidRecipe(res.data.data[0].id_recipe);
        setUrl("http://localhost:3000/detailrecipe/?id=" + res.data.data[0].id_recipe);
        // setUrl("http://localhost:3000/detailrecipe/");
        setRecipe(res.data.data[0].name_recipe);
        setUser(res.data.data[0].name);
        // setImageUpdate(res.data.data[0].image_recipe); /////

        // console.log(res.data.data[0]);
        // console.log(res.data.data[1].image_recipe);

        // file:///E:/p/Bitri_Recipe_Web/images/food_images/foodImage_7.jpeg
        // http://localhost:8000/images/food_images/foodImage_7.jpeg

        // setTimeout(() => {
        //   setIsLoading(false);
        // }, 10000);
      } )
      .catch((err) => {
        console.log(err)
      })
  });

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

    <>
      <Col md={6}>
        <Image src={newestRecipe} className="pic100" alt="search pic" />
      </Col>

      <Col md={1}></Col>
      <Col md={5}>
        <div className='centering textLeft'>
          <h1>{recipe}</h1>
          <p>Recipe by {user}</p>
          <Button
            variant="primary"
            type="button"
            className="button"
            href={url}
          >
            Learn More
          </Button>
        </div>
      </Col>
    </>
  );
}
