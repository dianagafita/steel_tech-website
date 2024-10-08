import YouTube from "react-youtube";

export const VideoPlayer = ({ videoId }) => {
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      className="my-10 p-5 max-w-[800px] w-full"
    />
  );
};
