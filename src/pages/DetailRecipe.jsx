import { 
  Row, 
  Col, 
  Button, 
  Form,
} from 'react-bootstrap';
import defaultDetailRecipe from '../assets/defaultDetailRecipe.png';
import NavbarPage from "../components/organism/NavbarPage";
import FooterTop from "../components/organism/FooterTop";
import FooterBottom from "../components/organism/FooterBottom";

function DetailRecipe() {
  return (
    <div className='detailRecipe'>
      <NavbarPage />
      
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
                <Form.Control as="textarea" placeholder="Comment here . . ." rows={5} />
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

        
          <FooterTop />
          <FooterBottom />

    </div>
  );
}

export default DetailRecipe;