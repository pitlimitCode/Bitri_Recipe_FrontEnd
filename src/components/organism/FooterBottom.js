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
      <Row className='pb-4 text-center'>
        <Col></Col>
        <Col>
          <div className='footerP'>
            <span className='px-2' style={{fontSize:'14px'}}>Product</span>
            <span className='px-2' style={{fontSize:'14px'}}>Company</span>
            <span className='px-2' style={{fontSize:'14px'}}>Learn more</span>
            <span className='px-2' style={{fontSize:'14px'}}>Get in touch </span>
          </div>
        </Col>
        <Col>
          <a className='footerP' style={{fontSize:'14px'}} href="https://camp.pijarmahir.id/class/fullstack-website-developer">
            <strong>PijarCamp</strong>
          </a>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default FooterBottom;