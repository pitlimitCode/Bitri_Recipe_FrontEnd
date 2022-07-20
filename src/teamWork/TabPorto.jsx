import React from 'react'
import { 
  Row,
  Col,
  Image,
} from 'react-bootstrap'

import p1 from './image/exPorto1.png';
import p2 from './image/exPorto2.png';
import p3 from './image/exPorto3.png';
import p4 from './image/exPorto4.png';

export default function Porto() {
  return (
    <div className="portoPage">
        <Row>
          <Col sm={4} className="mb-4 theTitle">
              <Image src={p1}/>
              <div>Portofolio App</div>
          </Col>
          <Col sm={4} className="mb-4 theTitle">
              <Image src={p2}/>
              <div>Portofolio App</div>
          </Col>
          <Col sm={4} className="mb-4 theTitle">
              <Image src={p3}/>
              <div>Portofolio App</div>
          </Col>
          <Col sm={4} className="mb-4 theTitle">
              <Image src={p4}/>
              <div>Portofolio App</div>
          </Col>

        </Row>

    </div>
  )
}
