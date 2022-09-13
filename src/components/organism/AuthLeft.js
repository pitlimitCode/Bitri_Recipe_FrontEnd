import authImage from '../../assets/default/authImage.png';
import barberqueLogo from '../../assets/default/barberqueLogo.png';
import { Image } from 'react-bootstrap';

import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function LeftloginRegis() {
  let navigate = useNavigate();
  const reduxconst = useSelector(state => state);
  React.useEffect(() => {
    if (reduxconst.auth.isLogin) {
      navigate("/");
    }
  }, [])

  return (
    <>
      <a href="/"><Image className="imageParent" src={authImage} alt="backgroundImage"/></a>
      <Image className="imageChild" src={barberqueLogo} alt="logoImage"/>
    </>
  );
}
