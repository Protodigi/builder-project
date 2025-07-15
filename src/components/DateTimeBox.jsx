import React from "react";
import "./DateTimeBox.css";

const DateTimeBox = () => {
  return (
    <div className="datetime-box">
      <div className="datetime-border">
        <div className="datetime-icon-circle">
          <svg
            width="25"
            height="28"
            viewBox="0 0 25 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="calendar-icon"
          >
            <path
              d="M22.5 4H19.5V2C19.5 1.45 19.05 1 18.5 1S17.5 1.45 17.5 2V4H7.5V2C7.5 1.45 7.05 1 6.5 1S5.5 1.45 5.5 2V4H2.5C1.4 4 0.5 4.9 0.5 6V24C0.5 25.1 1.4 26 2.5 26H22.5C23.6 26 24.5 25.1 24.5 24V6C24.5 4.9 23.6 4 22.5 4ZM22.5 24H2.5V10H22.5V24Z"
              fill="#083544"
            />
          </svg>
        </div>
        <span className="datetime-text">November 26 | 12:00 PM</span>
      </div>
    </div>
  );
};

export default DateTimeBox;
