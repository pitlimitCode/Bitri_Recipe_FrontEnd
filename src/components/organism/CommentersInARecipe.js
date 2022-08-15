import { 
    Row, 
    Col, 
  } from 'react-bootstrap';
  
  import React from 'react';
  import axios from "axios";
    
  // import defaultDetailRecipe from '../assets/default/detailRecipe.png';
  
  // import { useLocation } from 'react-router-dom';
  
  export default function CommentersInARecipe(props) {
		// const search = useLocation().search;
    const getProps = props;
		const id = getProps.recipeId;
    
		const [listData, setListData] = React.useState([]);
		// let datas;
    // const [recipeName, setRecipeName] = React.useState("");
    // const [recipeImage, setRecipeImage] = React.useState("");
    // const [recipeIngre, setRecipeIngre] = React.useState("");
    // const [recipeSteps, setRecipeSteps] = React.useState("");
    // let showImageRecipe = defaultDetailRecipe;
  
    React.useEffect(() => {
      axios.get(process.env.REACT_APP_BE_URL + "comments/new?id_recipe=" + id + "&limit=10")
			// /comments/new?id_recipe=7&limit=5
				.then((res) => {
          console.log(res.data.data);
					setListData(res.data.data);
					// datas = res.data.data;
  
        })
        .catch((e) => console.log(e.message))
      }, []); 
      
      // if(recipeImage){
      //   showImageRecipe = recipeImage;
      // }
  
    return (
			<>
      {listData 
        ?
        listData.map(data => 

        <Row key={data.id} className='mb-3'>
          <Col sm={1}>
            <img 
              src={`${process.env.REACT_APP_BE_URL}${data.avatar}`} 
              // id='avatarDetailRecipe'
              width='60px'
              height='60px'
              style={{
                borderRadius:'50%',
                objectFit:'cover',
              }}
            />
          </Col>
          <Col sm={11}>
            <h5 className="textLeft">{data.name}</h5>
            <h6 className="textLeft">{data.comment_text}</h6>
          </Col>
        </ Row>
        
        )
        : <p className='text-center'>No comment history</p>
      }

			</>
  
    );
  }