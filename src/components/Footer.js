import React from "react";
import "../styles/footer.css";
import Facebook from "../Images/Facebook-Icon.svg";
import Github from "../Images/GitHub-Icon.svg";
import Instagram from "../Images/Instagram-Icon.svg";
import Twitter from "../Images/Twitter-Icon.svg";

const Footer = () => {
  return (
    <div className="Footer-section">
      <a href="https://www.facebook.com/JithinJagadeesh23">
        <img src={Facebook} alt="" />
      </a>
      <a href="https://github.com/jithin-j">
        <img src={Github} alt="" />
      </a>
      <a href="https://www.instagram.com/jithin._.j/">
        <img src={Instagram} alt="" />
      </a>
      <a href="https://twitter.com/JithinJ29810808">
        <img src={Twitter} alt="" />
      </a>
    </div>
  );
};

export default Footer;
