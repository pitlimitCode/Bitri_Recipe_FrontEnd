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
import DetailRecipe from "./pages/DetailRecipe";
import UrlNotFound from "./pages/urlNotFound";
import { 
  Container, 
} from 'react-bootstrap';

import React from "react";
import axios from "axios";

import ProfileJobseeker from "./teamWork/ProfileJobseeker";
import Porto from "./teamWork/TabPorto";
import JobsExp from "./teamWork/TabJobsExp";
import EditProfileJobseeker from "./teamWork/EditProfileJobseeker";


export default function App() {
  // console.log(process.env);
  // console.log(process.env.REACT_APP_BE_URL);

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
        <Route path="DetailRecipe" element={<DetailRecipe />} />
        <Route path="*" element={<UrlNotFound />} />
        
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="ProfileJobseeker" element={<ProfileJobseeker />} />
        <Route path="Porto" element={<Porto />} />
        <Route path="JobsExp" element={<JobsExp />} />
        <Route path="EditProfileJobseeker" element={<EditProfileJobseeker />} />
      
      </Routes>

  </Container>
  );
}