import React from "react";
import "./BenefitCard.css";

const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className="benefit-card">
      <img src={icon} alt="" className="benefit-icon" />
      <div className="benefit-content">
        <span className="benefit-title">{title}</span>
        <span className="benefit-description">{description}</span>
      </div>
    </div>
  );
};

export default BenefitCard;
