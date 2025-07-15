import React from "react";
import RegisterButton from "./RegisterButton";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cb0a83ce519798a0ca59fcc9374a309adaa7919?width=2880"
        alt="Footer background"
        className="footer-background"
      />
      <div className="footer-content">
        <RegisterButton />
      </div>
    </footer>
  );
};

export default Footer;
