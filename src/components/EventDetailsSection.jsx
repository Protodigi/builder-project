import React from "react";
import RegisterButton from "./RegisterButton";
import "./EventDetailsSection.css";

const EventDetailsSection = () => {
  return (
    <section className="event-details-section">
      <div className="event-details-content">
        <h2 className="event-dates-title">
          <span className="dates-highlight">Event Dates</span>
          <span className="dates-normal"> and Times</span>
        </h2>

        <p className="event-description">
          <span className="description-normal">The webinar will run for </span>
          <span className="description-highlight">30 minutes</span>
          <span className="description-normal">
            , with additional time being provided for Q&A to ensure all of your
            questions are answered. Join us during your lunch break for{" "}
          </span>
          <span className="description-highlight">
            a focused and informative session
          </span>
          <span className="description-normal">
            {" "}
            designed to fit into your day, and give you practical takeaways!
          </span>
        </p>

        <div className="event-register-button">
          <RegisterButton />
        </div>
      </div>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a16518a8d5a1fff679a935b6518003bc6412f23b?width=853"
        alt="Decorative graphic"
        className="event-decoration"
      />
    </section>
  );
};

export default EventDetailsSection;
