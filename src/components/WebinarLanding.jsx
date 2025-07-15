import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import BenefitsSection from "./BenefitsSection";
import PresenterSection from "./PresenterSection";
import EventDetailsSection from "./EventDetailsSection";
import Footer from "./Footer";
import "./WebinarLanding.css";

const WebinarLanding = () => {
  return (
    <div className="webinar-landing">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <PresenterSection />
      <EventDetailsSection />
      <Footer />
    </div>
  );
};

export default WebinarLanding;
