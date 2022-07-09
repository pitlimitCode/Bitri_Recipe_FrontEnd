import {
  Row,
  Col,
} from 'react-bootstrap';

function FooterBottom() {
  return (
    <Row className='footerBottom'>
      <Row className='pb-2'>
        <Col></Col>
        <Col>
          <p className='footerP'>Product Company Learn more Get in touch </p>
        </Col>
        <Col>
          <a className='footerP' href="https://camp.pijarmahir.id/class/fullstack-website-developer">
            <strong>PijarCAmp</strong>
          </a>
        </Col>
      </Row>
    </Row>
  );
}

export default FooterBottom;