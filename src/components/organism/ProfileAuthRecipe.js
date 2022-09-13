import {
  Container,
  Row,
  Col,
  Nav,
  Image,
  Tabs,
  Tab,
  Card,
} from 'react-bootstrap';

import React from 'react';
import axios from "axios";

export default function ProfileAuthRecipe() {
  const linkRecipe = process.env.REACT_APP_FE_URL + "/detailrecipe/?id=";
  const [MyRecipe, setMyRecipe] = React.useState([]);
  const [MyLikes, setMyLikes] = React.useState([]);

  React.useEffect(() => {

    // AXIOS USER - MY RECIPES
    axios.get(process.env.REACT_APP_BE_URL + "/users/myrecipes")
      .then((resmyrecipe) => {
        // console.log(resmyrecipe.data.result.data);
        if(resmyrecipe.data.result){
          setMyRecipe(resmyrecipe.data.result.data)
        } else {
          setMyRecipe(false)
        }
      })
      .catch((e) => console.log(e.message));

    // AXIOS USER - MY LIKES
    axios.get(process.env.REACT_APP_BE_URL + "/users/mylikes")
      .then((resmylikes) => {
        // console.log(resmylikes.data.result.data);
        if(resmylikes.data.result){
          setMyLikes(resmylikes.data.result.data)
        } else {
          setMyRecipe(false)
        }
      })
      .catch((e) => console.log(e.message));

  }, [setMyRecipe, setMyLikes])
  
  return (
    <>
    {/* USER - TABS */}
    <Tabs defaultActiveKey="1" id="uncontrolled-tab-example" className="mb-3">

      {/* USER - MY RECIPES */}
      <Tab eventKey="1" title="My Recipe">
        <Container>
          <Row>
            {
              (MyRecipe)
              ? MyRecipe.map(data => (
                  <Col key={data.id_recipe} xs={6} md={4} className ="parentImagePages mb-4">
                  <Card className="pic100">
                    <Nav.Link href= {`${linkRecipe}${data.id_recipe}`}>
                      <Image 
                        src={`${data.image}`} 
                        className="picImagePages" 
                        alt="search pic"
                      />
                    </Nav.Link>
                    <div className="bottom-left-text">{data.recipe_name}</div>
                  </Card>
                  </Col>
                ))
              : (null)
            }
          </Row>
        </Container>
      </Tab>

      {/* USER - MY LIKES RECIPE */}
      <Tab eventKey="2" title="Liked Recipe">
        <Container>
          <Row>
            {
              (MyRecipe)
              ? MyLikes.map(data => (
                  <Col key={data.id_like} xs={6} md={4} className ="parentImagePages mb-4">
                  <Card className="pic100">
                    <Nav.Link href= {`${linkRecipe}${data.id_recipe}`}>
                      <Image 
                        src={`${data.image}`} 
                        className="picImagePages" 
                        alt="search pic"
                      />
                    </Nav.Link>
                    <div className="bottom-left-text">{data.recipe_name}</div>
                  </Card>
                  </Col>
                ))
              : (null)
            }
          </Row>
        </Container>
      </Tab>

      {/* USER - MY SAVED RECIPES */}
      <Tab eventKey="3" title="Saved Recipe" disabled>
        Saved Recipe coming soon ...
      </Tab>

    </Tabs>
    </>
  );
}