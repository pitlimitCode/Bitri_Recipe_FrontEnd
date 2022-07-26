import authImage from '../../assets/default/authImage.png';
import barberqueLogo from '../../assets/default/barberqueLogo.png';
import {
  Image,
} from 'react-bootstrap';
import React from "react";

export default function LeftloginRegis() {
  
  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      window.location.href = "/";
    }
  }, []);
  
  // return (
  //   <>
  //     {/* <a href="/"> */}
  //       <Image src={authImage} className="img-fluid" alt="authImage" />
  //     {/* </a> */}
      
  //     <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
  //       <div className='d-flex justify-content-center align-items-center h-100'>
  //         <p className='text-white mb-0'>Can you see me?</p>
  //       </div>
  //     </div>
  //   </>
  // );
  return (
    <>
      <a href="/"><Image className="imageParent" src={authImage} alt="backgroundImage"/></a>
      <Image className="imageChild" src={barberqueLogo} alt="logoImage"/>
    </>
  );
}
