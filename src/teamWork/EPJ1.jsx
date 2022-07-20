import React from 'react';
import { 
  Container,
  Form,
} from 'react-bootstrap';

export default function EPJ1() {

  return (
    <>
      <div className="whiteBg ms-3 mb-3 pb-4">
        <Container className="ps-4 pe-4">
          <div className="titleEditProfile pt-4">Profile</div>
        </Container>
        <hr/>
        <Container className="ps-4 pe-4">
          <Form>
            <Form.Group className="mb-3 pSideBarProfile" controlId="formBasicEmail">
              <Form.Label>Full name</Form.Label>
              <Form.Control size="md" type="email" placeholder="Enter full name" />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3 pSideBarProfile" controlId="jobdesk">
              <Form.Label>Job desk</Form.Label>
              <Form.Control size="md" type="text" placeholder="Enter job desk" />
            </Form.Group>
            
            <Form.Group className="mb-3 pSideBarProfile" controlId="domicile">
              <Form.Label>Domicile</Form.Label>
              <Form.Control size="md" type="text" placeholder="Enter domicile" />
            </Form.Group>
            
            <Form.Group className="mb-3 pSideBarProfile" controlId="workplace">
              <Form.Label>Work Place</Form.Label>
              <Form.Control size="md" type="text" placeholder="Work place" />
            </Form.Group>
            
            <Form.Group className="mb-3 pSideBarProfile" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={5} size="md" placeholder="Enter description" />
            </Form.Group>
            
          </Form>
        </Container>
      </div>
    </>
  );
};