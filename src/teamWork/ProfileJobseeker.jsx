import React from 'react';
import { 
  Container,
  Row, 
  Col,
  Image,
  Button,
} from 'react-bootstrap';
import './ProfileJobseekers.css'; // this page CSS

import TabsProfile from './TabsProfile';

// import brand from './image/brandLogo.png'; //
// import bell from './image/bellLogo.png'; //
import avatar from './image/exAvatar.png'; // Photo Profile
import loc from './image/locLogo.png'; //
import mail from './image/mailLogo.png'; //
import instagram from './image/instagramLogo.png'; //
import github from './image/githubLogo.png'; //
import gitlab from './image/gitlabLogo.png'; //

export default function TeamProfileJobseeker() {

  return (
    <div className="profileJobseekers">
      <Container>
        <Row className='pt-5 pb-5'>
          <Col sm={1}></Col>

          {/* Profile */}
          <Col sm={3}>
            <Row>
              <div className="whiteBg pt-4 pb-5">
                <Image className=" pb-4" src={avatar}/>
                <div className="h1SideBarProfile">Louis Tomlinson</div>
                <div className="h2SideBarProfile pb-2">Web Developer</div>

                <div className="pSideBarProfile pb-2">Purwokerto, Jawa Tengah</div>
                
                <Row className="pSideBarProfile pb-2">
                  <Image className="loc" src={loc}/>
                  Purwokerto, Jawa Tengah
                </Row>

                <div className="pSideBarProfile pb-3">Freelancer</div>
                <div className="pSideBarProfile text pb-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis

                  {/* nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum */}
                </div>

                <Button
                  className="Button doit mt-3 mb-4"
                >
                  Hire
                </Button>

                <div className="h1SideBarProfile mb-2">Skill</div>
                <div className="mb-4 d-flex flex-wrap">
                  <div className="theTag">javascript</div>
                  <div className="theTag">python</div>
                  <div className="theTag">java</div>
                  <div className="theTag">C++</div>
                  <div className="theTag">php</div>
                  <div className="theTag">Golang</div>
                </div>
                
                <div className="pSideBarProfile">
                  <Row className="pSideBarProfile mb-2">
                      <Col sm={2}><Image className="icon" src={mail}/></Col>
                      <Col><a href="#1">Email</a></Col>
                  </Row>
                  <Row className="pSideBarProfile mb-2">
                      <Col sm={2}><Image className="icon" src={instagram}/></Col>
                      <Col><a href="#2">Instagram</a></Col>
                  </Row>
                  <Row className="pSideBarProfile mb-2">
                      <Col sm={2}><Image className="icon" src={github}/></Col>
                      <Col><a href="#3">Github</a></Col>
                  </Row>
                  <Row className="pSideBarProfile mb-2">
                      <Col sm={2}><Image className="icon" src={gitlab}/></Col>
                      <Col><a href="#4">Gitlab</a></Col>
                  </Row>
                </div>
              </div>
            </Row>

          </Col>

          {/* Portofolio & Job Experience */}
          <Col sm={7}>
            <div className="whiteBg ms-3">
              <Container>
                <TabsProfile/>
              </Container>
            </div>
          </Col>

          <Col sm={1}></Col>
        </Row>

      </Container>
    </div>
  );
};