import React from "react";
import "./LiveWebinarBadge.css";

const LiveWebinarBadge = () => {
  return (
    <div className="live-webinar-badge">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7541dec011c976fdc70938fbb5728724cf3b9611?width=609"
        alt="Live Webinar"
        className="badge-background"
      />
      <div className="live-indicator">
        <div className="live-dot"></div>
        <div className="live-ring"></div>
      </div>
    </div>
  );
};

export default LiveWebinarBadge;
