import { 
  Container,
  Row, 
  Col,
  Button,
  Form
} from 'react-bootstrap';

import React from 'react';

export default function EPJ2() {

  return (
    <>
      <div className="whiteBg ms-3 mb-3 pb-4">
        <Container className="ps-4 pe-4">
          <div className="titleEditProfile pt-4">Skills</div>
        </Container>
        <hr/>
        <Container className="ps-4 pe-4">
          <Form>
            <Row>
              <Col sm={9}>
                <Form.Group className="mb-3 pSideBarProfile" controlId="skill">
                  <Form.Control size="md" type="text" placeholder="Enter skill" />
                </Form.Group>
              </Col>
              <Col sm={3}>
                <Button
                  className="Button skillbutton"
                  variant="primary"
                  type="submit"
                >
                  Save
                </Button>
              </Col>
            </Row>

          </Form>
        </Container>
      </div>
    </>
  );
};