import React, { useState } from "react";
import "./LogOutStyles.css";
import { Button, Image } from "@chakra-ui/react";
import xicon from '../../images/x.png'

function LogOut(props) {

  // const [isOpenModal, setOpenModal] = useState(false);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => props.setOpenModal(!props.isOpenModal)}>
            <Image width={'1rem'} src={xicon}></Image>
          </button>
        </div>
        <div className="title">
          <h1>You are attempting to log out of THE MIND.</h1>
        </div>
          <p className="secondtitle">Are you sure?</p>
        <Button fontSize={'18px'} backgroundColor={'#02162F'} textColor='white' className="logoutbutton" height={'3rem'} width='28rem'>
            Log Out
        </Button>
      </div>
    </div>
  );
}

export default LogOut;