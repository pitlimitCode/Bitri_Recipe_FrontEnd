import { 
  Row, 
  Col, 
  Button, 
  Form,
} from 'react-bootstrap';
import NavbarPage from "../components/organism/NavbarPage";
import FooterTop from "../components/organism/FooterTop";
import FooterBottom from "../components/organism/FooterBottom";

function NewRecipe() {
  return (
    <div className='NewRecipe'>
      <NavbarPage />

        <h1>Add New Recipe</h1>
        <Row className="mt-5">
          <Col></Col>
          <Col md={10}>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="file" placeholder="Input Recipe Image" rows={8} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control type="name" placeholder="Title od Recipe"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" placeholder="Ingredients" rows={6} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" placeholder="Steps" rows={5} />
              </Form.Group>
              <Button variant="primary" type="submit" className="button">
                Submit
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>

          <FooterTop />
          <FooterBottom />
    </div>
  );
}

export default NewRecipe;