import React from "react";
import DateTimeBox from "./DateTimeBox";
import LiveWebinarBadge from "./LiveWebinarBadge";
import PresenterCard from "./PresenterCard";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a57e80e73e09c8be1be9c753519a432fe1f76575?width=2880"
        alt="Hero Background"
        className="hero-background"
      />

      <div className="hero-content">
        <LiveWebinarBadge />

        <h1 className="hero-title">
          How AI and CX Can Help Automotive Ecosystem Players Capitalise on the
          2021 Rebound
        </h1>

        <DateTimeBox />

        <PresenterCard />
      </div>
    </section>
  );
};

export default HeroSection;
