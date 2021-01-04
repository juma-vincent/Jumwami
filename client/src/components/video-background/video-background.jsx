import React from "react";
import "./video-background.scss";

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video className="video-content" autoPlay muted loop>
        <source src="/videos/typing.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
