import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import React from "react";

function FooterBottom() {
  return (
    <div className='bgYellow'>
      <Container>
      <Row className='pb-2'>
        <Col></Col>
        <Col>
          <p className='footerP'>Product Company Learn more Get in touch </p>
        </Col>
        <Col>
          <a className='footerP' href="https://camp.pijarmahir.id/class/fullstack-website-developer">
            <strong>PijarCamp</strong>
          </a>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default FooterBottom;