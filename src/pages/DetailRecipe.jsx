import './DetailRecipe.css';
import defaultDetailRecipe from './defaultDetailRecipe.png';
import { 
  Container, 
  Row, 
  Col, 
  Button, 
  Form,
} from 'react-bootstrap';

function DetailRecipe() {
  return (
    <div className='detailRecipe'>
      <Container>
      
        <Row>
          <Col></Col>
          <Col md={9}>
            <h1 className="mb-5">Recipe Name Choosen</h1>
            <img src={defaultDetailRecipe} alt="recipe pic" className="detailRecipeImage mb-5"></img>

            <h3 className="textLeft">Ingredients</h3>
            <p className="textLeft mb-5">Ingredients Ingredients</p>
            <h3 className="textLeft">Steps</h3>
            <p className="textLeft mb-5 ">Steps Steps</p>

            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" placeholder="Steps" rows={5} />
              </Form.Group>
              <Button variant="primary" type="submit" className="button">
                Submit
              </Button>
            </Form>
          </Col>
          <Col></Col>


          <h3 className="textLeft">Comment</h3>
          <p className="textLeft">pic</p>
          <p className="textLeft">comment</p>


        </Row>

        

      </Container>
    </div>
  );
}

export default DetailRecipe;