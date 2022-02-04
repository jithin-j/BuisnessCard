import React from "react";
import image from "../Images/profile.jpeg";
import '../styles/info.css'
import emailimg from '../Images/Button.svg'
import linkedinb from '../Images/LinkedinB.svg'
import githubb from '../Images/GithubB.svg'

const Info = () => {
  return (
    <div className="info-container">
      <img src={image} alt="profile" className="profile" />
      <h1 className = 'info-title'>Jithin Jagadeesh</h1>
      <h3 className = 'info-role'>Frontend Developer</h3>
      <div className="links">
        <a href="mailto:jithinjagadeesh1@gmail.com"><img src={emailimg} alt="email-button" /></a>
        <a href="https://www.linkedin.com/in/jithin-jagadeesh/"><img src={linkedinb} alt="linkedin-button"/></a>
        <a href = "https://github.com/jithin-j"><img src = {githubb} alt="github button" /></a>
      </div>
    </div>
  );
};

export default Info;
