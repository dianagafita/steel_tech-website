import { useState } from "react";

const HoverVideo = ({
  videoSrc,
  fallbackImage,
  width = "300px",
  height = "200px",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        width,
        height,
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      ) : (
        <img
          src={fallbackImage}
          alt="Preview"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}
    </div>
  );
};

export default HoverVideo;
