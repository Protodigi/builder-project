import React from "react";
import "./RegisterButton.css";

const RegisterButton = () => {
  const handleRegisterClick = () => {
    // Add registration logic here
    console.log("Register clicked");
  };

  return (
    <button className="register-button" onClick={handleRegisterClick}>
      <span>register now</span>
    </button>
  );
};

export default RegisterButton;
