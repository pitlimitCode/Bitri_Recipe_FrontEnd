import {
  Col,
  Button,
  Image
} from 'react-bootstrap';
import React from "react";
import axios from "axios";

// import newestRecipe from "../../assets/newestRecipe.png";
// import qwerty from "../../../../Bitri_Recipe_Web/images/food_images/foodImage_7.jpeg";

export default function HomeNewestRecipe() {
  // const [listPhoto, setListPhoto] = React.useState([]);
  // const [isLoading, setIsLoading] = React.useState([]);
  
  const [idRecipe, setidRecipe] = React.useState([]);
  const [url, setUrl] = React.useState([]);
  const [recipe, setRecipe] = React.useState([]);
  const [user, setUser] = React.useState([]);


  // const [imageUpdate, setImageUpdate] = React.useState([]); /////
  
  React.useEffect(() => {
    axios.get("http://localhost:8000/recipes/show/new")
      .then((res) => {
        setidRecipe(res.data.data[0].id_recipe);
        setUrl("http://localhost:8000/recipes/show/id?id=" + idRecipe);
        setRecipe(res.data.data[0].name_recipe);
        setUser(res.data.data[0].name);
        

        
        // setImageUpdate(res.data.data[2].image_recipe); /////
        // console.log(res.data.data[0].image_recipe);
        // console.log(res.data.data[1].image_recipe);
        // console.log(res.data.data[2].image_recipe);


        // file:///E:/p/Bitri_Recipe_Web/images/food_images/foodImage_7.jpeg
        // http://localhost:8000/images/food_images/foodImage_7.jpeg

        // setTimeout(() => {
        //   setIsLoading(false);s
        // }, 10000);
      } )
      .catch((err) => {
        console.log(err)
      })
  });

  return (
    <>
      <Col md={6}>

        {/* <img src={newestRecipe} className="pic100" alt="search pic"></img> */}
        {/* <img src={imageUpdate.replace("file:///E:/p/Bitri_Recipe_Web/", "http://localhost:8000/")} className="pic100" alt="search pic"></img>  */}
        {/* <img src={imageUpdate} className="pic100" alt="search pic"></img>  */}
        <Image src="http://localhost:8000/images/food_images/foodImage_7.jpeg" className="pic100" alt="new recipe pic" />
            
        {/* //// */}

      </Col>
      <Col md={1}></Col>
      <Col md={5}>
        <div className='centering textLeft'>
          <h3>{recipe}</h3>
          <p>Recipe by {user}</p>
          <Button
            variant="primary"
            type="submit"
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
