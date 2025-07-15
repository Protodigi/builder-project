import React from "react";
import "./PresenterCard.css";

const PresenterCard = () => {
  return (
    <div className="presenter-card">
      <span className="presented-by">Presented by</span>
      <div className="presenter-info">
        <div className="presenter-image-container">
          <div className="presenter-background-circle"></div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6796a56a0b85f3131071a373edb64638c25209be?width=266"
            alt="Dr Simon Kinsella"
            className="presenter-image"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e42476429c8be0ec688577006e98d580e55ed99?width=45"
            alt=""
            className="presenter-accent"
          />
        </div>
        <div className="presenter-details">
          <span className="presenter-name">Dr Simon Kinsella</span>
          <span className="presenter-title">
            Co-founder & Chief Science Officer
          </span>
        </div>
      </div>
    </div>
  );
};

export default PresenterCard;
