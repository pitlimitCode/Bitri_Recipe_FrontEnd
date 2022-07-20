import React from 'react';
import { 
  Container,
  Row, 
  Col,
  Image,
  Button,
} from 'react-bootstrap';
import './ProfileJobseekers.css'; // this page CSS

import EPJ1 from './EPJ1';
import EPJ2 from './EPJ2';
import EPJ3 from './EPJ3';
import EPJ4 from './EPJ4';

// import brand from './image/brandLogo.png'; //
// import bell from './image/bellLogo.png'; //
import avatar from './image/exAvatar.png'; // Photo Profile
import loc from './image/locLogo.png'; //
// import mail from './image/mailLogo.png'; //

export default function EditProfileJobseeker() {

  return (
    <div className="profileJobseekers">
      <Container>
        <Row className='pt-5 pb-5'>
          <Col sm={1}></Col>

          {/* Profile */}
          <Col sm={3}>
          {/* Profile */}
            <Row>
              <div className="whiteBg pt-4 pb-2">
                <Image className="pb-4" src={avatar}/>
                <div className="h1SideBarProfile">Louis Tomlinson</div>
                <div className="h2SideBarProfile pb-2">Web Developer</div>

                <div className="pSideBarProfile pb-2">Purwokerto, Jawa Tengah</div>
                
                <Row className="pSideBarProfile pb-2">
                  <Image className="loc" src={loc}/>
                  Purwokerto, Jawa Tengah
                </Row>

                <div className="pSideBarProfile pb-3">Freelancer</div>
              </div>
            </Row>

            {/* Button for edit Save & Cancel */}
            <div classname="profilSaveCancel"> 
              <Row>
                <Button
                  className="Button doit mt-3 mb-2"
                >
                  Save
                </Button>
                
                <Button
                  className="Button cancel mb-2"
                >
                  Cancel
                </Button>
              </Row>
            </div>

          </Col>

          {/* Portofolio & Job Experience */}
          <Col sm={7}>
            <EPJ1/>
            <EPJ2/>
            <EPJ3/>
            <EPJ4/>
          </Col>

          <Col sm={1}></Col>
        </Row>

      </Container>
    </div>
  );
};