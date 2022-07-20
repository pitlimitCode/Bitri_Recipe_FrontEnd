import React from 'react';
import { 
  Container,
  Button,
  Form
} from 'react-bootstrap';

export default function EPJ4() {
  
  return (
    <>
      <div className="whiteBg ms-3 mb-3 pb-4">
        <Container className="ps-4 pe-4">
          <div className="titleEditProfile pt-4">Job Experiences</div>
        </Container>
        <hr/>
        <Container className="ps-4 pe-4">
          <Form>
            <Form.Group className="mb-3 pSideBarProfile" controlId="appsname">
              <Form.Label>Apps name</Form.Label>
              <Form.Control size="md" type="text" placeholder="Enter apps" />
            </Form.Group>

            <Form.Group className="mb-3 pSideBarProfile" controlId="linkrepository">
              <Form.Label>Link repository</Form.Label>
              <Form.Control size="md" type="text" placeholder="Enter link repository" />
            </Form.Group>
          
            <Form.Group className="mb-3 pSideBarProfile" controlId="domicile">
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Mobile Apps"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Mobile Apps"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </Form.Group>
            
            <Form.Group className="mb-3 pSideBarProfile" controlId="fileImage">
              <Form.Label>Upload image</Form.Label>
              <Form.Control size="md" type="file" />
            </Form.Group>

            <Button
              className="Button skillbutton"
              variant="primary"
              // type="submit"
              // onClick={()}
            >
              Add Portofolio
            </Button>
          </Form>
        </Container>
      </div>
    </>
  );
};