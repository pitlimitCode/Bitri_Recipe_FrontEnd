import searchImage from './searchImage.png';
import newestRecipe from './newestRecipe.png';
import './LandingPage.css';
import {Container, Row, Col, Button, Navbar, Nav, Form} from 'react-bootstrap';

function LandingPage() {
  return (
    <Container>
      <div className='landingPage'>
        <div className='inContainer'>


          <Row>
            <Navbar bg="light" variant="light">
              <Nav className="me-auto">
                <Nav.Link nameClass="navlink" href="Profile">Profile</Nav.Link>
                <Nav.Link nameClass="navlink" href="Home">Home</Nav.Link>
                <Nav.Link nameClass="navlink" href="Recipe">Recipe</Nav.Link>
              </Nav>
            </Navbar>
          </Row>

          <Row>
            <Col>
              <p className="pSearch">Discover Recipe & Delicious Food</p>
              <Form>
                <Form.Group className="mb-3" controlId="formSearch">
                  <Form.Label className='fontLabel'>Email</Form.Label>
                  <Form.Control size="lg" type="recipe" placeholder="Search Recipe" />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <img src={searchImage} className="searchImage" alt="Search Pic" />
            </Col>
          </Row>

          <Row>
            <p className="titleSub">New Recipe</p>
          </Row>

          <Row>
            <Col>
              <img src={newestRecipe} className="newestRecipe" alt="Newest Recipe" />
            </Col>

            <Col>
              <p className="pNewRec">New Recipe Name !!!</p>



            </Col>
          </Row>

          
          <Row>
            <p className="titleSub">All Recipes</p>
          </Row>

          <Row>

          </Row>
          

          <Row>
          <div className="bgFooter">
            <Col xs={4}>

            </Col>

            <Col xs={4}>
              <p>Eat, Cook, Repeat</p>
              <p>Share your best recipe by uploading here !</p>
              <Row>
                <Col xs={3}>

                </Col>
                <Col xs={3}>

                </Col>
                <Col xs={3}>

                </Col>
                <Col xs={3}>

                </Col>
              </Row>
              
            </Col>

            <Col xs={4}>
              <p className="titleSub">Pijar Camp</p>
            </Col>

          </div>
          </Row>



          <Button></Button>


        </div>
      </div>
    </Container>
  );
}

export default LandingPage;