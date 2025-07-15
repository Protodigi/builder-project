import React from "react";
import BenefitCard from "./BenefitCard";
import RegisterButton from "./RegisterButton";
import "./BenefitsSection.css";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6c8e2d5164dcb12d680f2df4a6120033882fb4a3?width=99",
      title: "The latest science-backed insights:",
      description:
        "Understand the latest advancements in AI-driven mental health solutions from a professional clinician",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d66a1fda6b0eb4072002e58d41d6ba396386cded?width=101",
      title: "Boost employee wellbeing:",
      description:
        "See how AI can support mental wellbeing, increase productivity, and reduce absenteeism in Australian workplaces",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d80069083b9460f15d11cd94b57eea06f971c4fb?width=97",
      title: "Enhance your EAP impact:",
      description:
        "Explore how AI integrates with and enhances Employee Assistance Programs, increasing both their impact and your ROI",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7dacefdb824d7b5dd36b0c5ee36c9cff2db0d249?width=109",
      title: "Expert advice for Australian businesses:",
      description:
        "Gain timely insights from Dr Simon Kinsella, a leading corporate psychologist, on mental health and AI applied to the Australian context",
    },
  ];

  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <h2 className="benefits-title">
          <span className="title-regular">What</span>
          <span className="title-bold"> you'll gain from attending:</span>
        </h2>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>

        <div className="benefits-register-button">
          <RegisterButton />
        </div>
      </div>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/25ccf049e334b29ae5fa5a994f6c6c0336e3bc99?width=582"
        alt="Decorative Sphere"
        className="decorative-sphere"
      />
    </section>
  );
};

export default BenefitsSection;
