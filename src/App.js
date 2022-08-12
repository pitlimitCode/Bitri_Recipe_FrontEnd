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
import SearchRecipePage from './pages/SearchRecipePage';
// import UrlNotFound from "./pages/UrlNotFound";

import React from "react";
import axios from "axios";

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
     <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="detailRecipe" element={<DetailRecipe />} />
        <Route path="newRecipe" element={<NewRecipe />} />
        <Route path="search" element={<SearchRecipePage />} />
        {/* <Route path="*" element={<UrlNotFound />} /> */}
      </Routes>
    </>
  );
}