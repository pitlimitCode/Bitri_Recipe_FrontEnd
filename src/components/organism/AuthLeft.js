import authImage from '../../assets/default/authImage.png';
import barberqueLogo from '../../assets/default/barberqueLogo.png';
import {
  Image,
} from 'react-bootstrap';
import React from "react";
import { useNavigate } from "react-router-dom";

export default function LeftloginRegis() {
  let navigate = useNavigate();
  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  
  return (
    <>
      <a href="/"><Image className="imageParent" src={authImage} alt="backgroundImage"/></a>
      <Image className="imageChild" src={barberqueLogo} alt="logoImage"/>
    </>
  );
}
