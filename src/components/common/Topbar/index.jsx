import React from 'react'
import "./index.scss";
import LinkedinLogo from "../../../assets/linkedinLogo.png";
import { AiOutlineHome, AiOutlineUserSwitch } from 'react-icons/ai';

export default function Topbar() {
  return (<div className='topbar-main'>
    <img className="linkedin-logo" src={LinkedinLogo} alt="LinkedinLogo" />
    <div>
      <AiOutlineHome size={40}/>
      <AiOutlineUserSwitch size={40}/>
    </div>
  </div>
  );
}
