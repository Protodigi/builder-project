import React from "react";
import RegisterButton from "./RegisterButton";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ecc11cf90ca5a616fdb3bd421c02157e75175a2?width=568"
          alt="Simpatico White"
          className="header-logo"
        />
        <RegisterButton />
      </div>
    </header>
  );
};

export default Header;
