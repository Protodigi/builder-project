import React from "react";
import RegisterButton from "./RegisterButton";
import "./PresenterSection.css";

const PresenterSection = () => {
  return (
    <section className="presenter-section">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/475df1d124f174d8cf2934297d45a721a0320435?width=2880"
        alt="Background"
        className="presenter-background"
      />

      <div className="presenter-section-content">
        <p className="presenter-bio">
          <span className="bio-highlight">
            A regular media commentator on psychological issues
          </span>
          <span className="bio-emphasis">
            {" "}
            — including for Seven Network, Nine and 10{" "}
          </span>
          <span className="bio-highlight">—</span>
          <span className="bio-normal">
            {" "}
            Dr Kinsella is a clinical psychologist with over 30 years of
            experience who has held leadership roles within the Australian
            Psychological Society, and delivered more than 30,000+ hours of
            executive coaching, psychotherapy, mentoring and supervision.
          </span>
        </p>

        <div className="presenter-profile">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b04e22de8848e5a41e4aa9646d26b74b2bd1ad5a?width=278"
            alt="Dr Simon Kinsella"
            className="presenter-profile-image"
          />
          <div className="presenter-profile-info">
            <span className="presenter-profile-name">Dr Simon Kinsella</span>
            <span className="presenter-profile-title">
              Co-founder & Chief Science Officer
            </span>
          </div>
        </div>

        <div className="presenter-register-button">
          <RegisterButton />
        </div>
      </div>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a07dcc8e728d98189f3403a7daa31be9ccf1246?width=116"
        alt="Decorative element"
        className="presenter-decoration"
      />
    </section>
  );
};

export default PresenterSection;
