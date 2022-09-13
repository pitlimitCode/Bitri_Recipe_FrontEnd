import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from "react";
import axios from "axios";
import {useSelector} from 'react-redux';

import Login from "./pages/Login";
import Register from "./pages/Register";
import LandingPage from "./pages/LandingPage";
import NewRecipe from "./pages/NewRecipe";
import EditRecipe from "./pages/EditRecipe";
import Profile from "./pages/Profile";
import DetailRecipe from "./pages/DetailRecipe";
import SearchRecipePage from './pages/SearchRecipePage';
import UrlNotFound from "./pages/UrlNotFound";
// import Tes from "./pages/tes";
// import Tes2 from "./pages/tes2";

export default function App() {
  const reduxconst = useSelector(state => state);
  // console.log(reduxconst);
  axios.interceptors.request.use(
    function (config) {
      if(reduxconst.auth.isLogin){
        config.headers = {
          Authorization: `Bearer ${reduxconst.auth.token}`
        };
      }
      return config;
    }
  );

  // const token = useSelector(state => state.auth.isLoggedIn);
  // console.log(token);
  // console.log(isLoggedIn);
  // if (localStorage.getItem("token")) {
  //   console.log(isLoggedIn);
  // } else { 
  //   console.log(isLoggedIn);
  // }
  return (
     <>
     
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="detailRecipe" element={<DetailRecipe />} />
        <Route path="newRecipe" element={<NewRecipe />} />
        <Route path="editrecipe" element={<EditRecipe />} />
        <Route path="search" element={<SearchRecipePage />} />
        <Route path="*" element={<UrlNotFound />} />

        {/* <Route path="/tes" element={<Tes />} /> */}
        {/* <Route path="/tes2" element={<Tes2 />} /> */}
      </Routes>
    </>
  );
}