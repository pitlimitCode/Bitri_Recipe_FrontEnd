import React from 'react';
import { 
  Container,
  Row,
  Col,
  Button,
  Form
} from 'react-bootstrap';

export default function EPJ3() {
  
  return (
    <>
      <div className="whiteBg ms-3 mb-3 pb-4">
        <Container className="ps-4 pe-4">
          <div className="titleEditProfile pt-4">Job Experiences</div>
        </Container>
        <hr/>
        <Container className="ps-4 pe-4">
          <Form>
            <Form.Group className="mb-3 pSideBarProfile" controlId="position">
              <Form.Label>Position</Form.Label>
              <Form.Control size="md" type="text" placeholder="Web developer, Mobile app developer" />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group className="mb-3 pSideBarProfile" controlId="company">
                  <Form.Label>Company name</Form.Label>
                  <Form.Control size="md" type="text" placeholder="PT. Company Corp" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3 pSideBarProfile" controlId="domicile">
                  <Form.Label>Month/Year</Form.Label>
                  <Form.Control size="md" type="text" placeholder="July 2022" />
                </Form.Group>
              </Col>
            </Row>
            
              <Form.Group className="mb-3 pSideBarProfile" controlId="workplace">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={4} size="md" placeholder="Description your jobs" />
              </Form.Group>
            
            <Button
              className="Button skillbutton"
              variant="primary"
              // type="submit"
              // onClick={()}
            >
              Add Job Experiences
            </Button>
          </Form>
        </Container>
      </div>
    </>
  );
};