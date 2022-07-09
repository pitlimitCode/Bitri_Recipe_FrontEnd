import './App.css';
import { Routes, Route } from "react-router-dom";
import { ProfileContext } from "./context";

import Login from "./pages/Login";
import Register from "./pages/Register";
import LandingPage from "./pages/LandingPage";
import NewRecipe from "./pages/NewRecipe";
import Profile from "./pages/Profile";
import DetailRecipe from "./pages/DetailRecipe";
import UrlNotFound from "./pages/urlNotFound";
import { 
  Container, 
} from 'react-bootstrap';

export default function App() {
  return (
  <Container className="App">
    <ProfileContext.Provider value={{ name: "PROFIL CONTEXT DI APP.JS" }}>

      {/* MAIN ROUTE */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="NewRecipe" element={<NewRecipe />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="DetailRecipe" element={<DetailRecipe />} />
        <Route path="*" element={<UrlNotFound />} />
      </Routes>

    </ProfileContext.Provider>
  </Container>
  );
}