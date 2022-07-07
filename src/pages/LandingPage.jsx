import searchImage from './searchImage.png';
import newestRecipe from './newestRecipe.png';
import './LandingPage.css';
import { 
  Container, 
  Row, 
  Col, 
  Button, 
  Form,
  // Pagination,
} from 'react-bootstrap';

function LandingPage() {
  return (
    <div className='landingPage'>
      <Container>
      
        
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
            <img src={searchImage} alt="search pic"></img>
          </Col>
        </Row>


        <Row className="mb-4">
          <h4>New Recipe</h4>
        </Row>

        <Row className="mb-5">
          <Col md={6}>
            <img src={newestRecipe} alt="search pic"></img>
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
            <img src={newestRecipe} alt="search pic"></img>
          </Col>
          <Col>
            <img src={newestRecipe} alt="search pic"></img>
          </Col>
          <Col>
            <img src={newestRecipe} alt="search pic"></img>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <img src={newestRecipe} alt="search pic"></img>
          </Col>
          <Col>
            <img src={newestRecipe} alt="search pic"></img>
          </Col>
          <Col>
            <img src={newestRecipe} alt="search pic"></img>
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

      </Container>
    </div>
  );
}

export default LandingPage;