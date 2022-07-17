// .env example: 
// BE_URL="http://localhost:8000/"

import './App.css';
import { 
  Routes,
  Route,
  // useParams ,
} from 'react-router-dom';

import Login from "./pages/Login";
import Register from "./pages/Register";
import LandingPage from "./pages/LandingPage";
import NewRecipe from "./pages/NewRecipe";
import Profile from "./pages/Profile";
import ProfileId from "./pages/ProfileId";
import DetailRecipe from "./pages/DetailRecipe";
// import UrlNotFound from "./pages/urlNotFound";
import { 
  Container, 
} from 'react-bootstrap';

import React from "react";
import axios from "axios";

// URL

export default function App() {
  // console.log(localStorage.getItem("token"));

  axios.interceptors.request.use(
    function (config) {
      if (localStorage.getItem("token")) {
        config.headers = {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          User_name: localStorage.getItem("name")
        };
      }
      return config;
    }
  )
  // let { userId } = useParams();
  // console.log(useParams());

  //  userActive: `${localStorage.getItem("token")}`

  return (
  <Container className="App">

      {/* MAIN ROUTE */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="NewRecipe" element={<NewRecipe />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="profile/:id" component={<ProfileId />} />
        <Route path="DetailRecipe" component={<DetailRecipe />} />
        {/* <Route path="*" element={<UrlNotFound />} /> */}
      </Routes>

  </Container>
  );
}