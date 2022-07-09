import React from "react";
// import axios from "axios";
import { 
  Row, 
  Col, 
  Button, 
  Form,
  // Pagination,
} from 'react-bootstrap';
import NavbarPage from "../components/organism/NavbarPage";
import FooterTop from "../components/organism/FooterTop";
import FooterBottom from "../components/organism/FooterBottom";
import newestRecipe from '../assets/newestRecipe.png';
import searchImage from '../assets/searchImage.png';

function LandingPage() {
  // const [listPhoto, setListPhoto] = React.useState([]);
  // const [isLoading, setIsLoading] = React.useState([]);

  // React.useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     window.location.href = "/login";
  //   }
  // }, []);

  // React.useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/photos")
  //     .then((res) => {
  //       setListPhoto(res.data);
  //       setTimeout(() => {
  //         setIsLoading(false);
  //       }, 10000);
  //     });
  // }, []);

  return (
    <div className='landingPage'>

      <NavbarPage />
      
        {/* <Container>
          <Row>
            {isLoading ? (
              <>
        {[...Array(6)]?.map(() => (
          <Col lg={4}>
            <CardImage image={ "https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif" }/>
          </Col>
        ))}
              </>
            ) : (
              <>
        {listPhoto?.map((item) => (
          <Col lg={4}>
            <CardImage image={item?.url} title={item?.title} />
          </Col>
        ))}
              </>
            )}
          </Row>
        </Container> */}


        <Row className="mb-5">
          <Col md={5}>
            <div className='centering textLeft'>
              <h1 className='textLeft'>Discover Recipe</h1>
              <h1 className='textLeft'>& Delicious Food</h1>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="text" placeholder="Search recipe" />
              </Form.Group>
              {/* <Button variant="primary" type="submit" className="button">
                Submit
              </Button> */}
            </div>
          </Col>

          <Col md={1}></Col>
          <Col md={6}>
            <img src={searchImage} className="pic100" alt="search pic"></img>
          </Col>
        </Row>


        <Row className="mb-4">
          <h4>New Recipe</h4>
        </Row>

        <Row className="mb-5">
          <Col md={6}>
            <img src={newestRecipe} className="pic100" alt="search pic"></img>
          </Col>
          <Col md={1}></Col>
          <Col md={5}>
            <div className='centering textLeft'>
              <h3>NEW_RECIPE_NAME</h3>
              <p>STEP_COOK_RECIPE</p>
              <Button variant="primary" type="submit" className="button" href="/detailrecipe">
                Learn More
              </Button>
            </div>
          </Col>
        </Row>


        {/* Harusnya pagination semua recipe yang ada*/}
        <Row className="mb-4">
          <h4>All recipe</h4>
        </Row>

        <Row className="mb-4">
          <Col>
            <img src={newestRecipe} className="pic100" alt="search pic"></img>
          </Col>
          <Col>
            <img src={newestRecipe} className="pic100" alt="search pic"></img>
          </Col>
          <Col>
            <img src={newestRecipe} className="pic100" alt="search pic"></img>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <img src={newestRecipe} className="pic100" alt="search pic"></img>
          </Col>
          <Col>
            <img src={newestRecipe} className="pic100" alt="search pic"></img>
          </Col>
          <Col>
            <img src={newestRecipe} className="pic100" alt="search pic"></img>
          </Col>
        </Row>
        <Row>
      

        {/* let active = 2;
        let items = [];
        for (let number = 1; number <= 5; number++) {
          items.push(
            <Pagination.Item key={number} active={number === active}>
              {number}
            </Pagination.Item>,
          );
        }

        const paginationBasic = (
          <div>
            <Pagination>{items}</Pagination>
            <br />

            <Pagination size="lg">{items}</Pagination>
            <br />

            <Pagination size="sm">{items}</Pagination>
          </div>
        );

        render(paginationBasic); */}

        </Row>

        <FooterTop />
        <FooterBottom />
    </div>
  );
}

export default LandingPage;