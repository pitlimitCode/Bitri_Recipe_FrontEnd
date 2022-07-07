import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LandingPage from "./pages/LandingPage";
import NewRecipe from "./pages/NewRecipe";
import Profile from "./pages/Profile";
import DetailRecipe from "./pages/DetailRecipe";
import UrlNotFound from "./pages/urlNotFound";
import { 
  Container, 
  Row,
  Col,
  Navbar, 
  Nav, 
} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
    <Container>
      <Row className="mb-4">
        <Navbar bg="transparent" variant="light">
          <Nav className="me-auto">
            <Nav.Link nameClass="navlink" href="/">Home</Nav.Link>
            <Nav.Link nameClass="navlink" href="newrecipe">Add Recipe</Nav.Link>
            <Nav.Link nameClass="navlink" href="profile">Profile</Nav.Link>
            <Nav.Link nameClass="navlink" href="login">Login</Nav.Link>
            <Nav.Link nameClass="navlink" href="register">Register</Nav.Link>
          </Nav>
        </Navbar>
      </Row>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="NewRecipe" element={<NewRecipe />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="DetailRecipe" element={<DetailRecipe />} />
        <Route path="*" element={<UrlNotFound />} />
      </Routes>



      <div className='footer'>
        <Row className='pt-5'>
          <Col>
          </Col>
          <Col className="mb-5">
            <h1>Eat, Cook, Repeat</h1>
            <p className='footerP'>Share your best recipe by uploading here !</p>
          </Col>
          <Col>
          </Col>

        </Row>
          
        <Row className='pb-2'>
          <Col>
          </Col>
          <Col>
            <p className='footerP'>Product Company Learn more Get in touch </p>
          </Col>
          <Col>
            <a className='footerP' href="https://camp.pijarmahir.id/class/fullstack-website-developer">
              <strong>PijarCAmp</strong>
            </a>
          </Col>

        </Row>
      </div>

    </Container>
    </div>
  );
}



export default App;
