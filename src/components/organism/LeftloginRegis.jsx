import loginImage from '../../assets/loginImage.png';
import defaultAvatar from '../../assets/defaultAvatar.jpg';
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
  //       <Image src={loginImage} className="img-fluid" alt="loginImage" />
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
      <a href="/"><Image className="imageParent" src={loginImage} alt="backgroundImage"/></a>
      <Image className="imageChild" src={defaultAvatar} alt="logoImage"/>
    </>
  );
}
