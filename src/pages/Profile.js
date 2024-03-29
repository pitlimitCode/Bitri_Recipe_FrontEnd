import {
  Container,
  Image,
  // Button,
} from 'react-bootstrap';

import React from 'react';
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import NavbarPage from "../components/organism/NavbarPage";
import ProfileAuthRecipe from "../components/organism/ProfileAuthRecipe";
import FooterBottom from "../components/organism/FooterBottom";

export default function Profile() {
  let navigate = useNavigate();

  const reduxconst = useSelector(state => state);
  // console.log(reduxconst.auth.isLogin);
  React.useEffect(() => {
    if (reduxconst.auth.isLogin == false) {
      navigate("/");
    }
  }, [])

  const [IdUser, setIdUser] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [avatar, setAvatar] = React.useState("");
  const [ChangeAvatar, setChangeAvatar] = React.useState("");
  
  // AXIOS USER - GET ID AND SHOW AVATAR AND IMAGE
  React.useEffect(() => {
    axios.get(process.env.REACT_APP_BE_URL + "/users/getid")
      .then((res) => {
        // console.log(res);
        setIdUser(res.data.id)

        axios.get(process.env.REACT_APP_BE_URL + "/users/id/" + IdUser)
          .then((resprofile) => {
            // console.log(resprofile);
            setUserName(resprofile.data.data?.name)
            setAvatar(resprofile.data.data?.avatar)
          }).catch((e) => console.log(e.message));

      }).catch((e) => console.log(e.message));
  }, [IdUser]);

  // CHANGE AVATAR USER
  const formData = new FormData();
  formData.append('avatar', ChangeAvatar);
  const handleChangeAvatar = () => {
    axios
      .patch(process.env.REACT_APP_BE_URL + "/users/addavatar", formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err?.response?.data)
      });
  };
  
  return (
    <>
    <NavbarPage />
    <Container className="mt-4">
      {/* AVATAR USER */}
      {/* {console.log(`${process.env.REACT_APP_BE_URL}/${avatar}`)} */}
      <Image src={`${avatar}`} alt='user avatar' className="avatar center" />
      
      <input type="file"
        onChange={(e) => setChangeAvatar(e.target.files[0])} 
        onClick={handleChangeAvatar}
        className="center"
      />
      {/* <span><Button /></span> */}

      {/* NAME USER */}
      <h5 className="mt-2 mb-5 text-center">{userName}</h5>
    </Container>
      
    <ProfileAuthRecipe />
    <FooterBottom />
    </>
  );
}