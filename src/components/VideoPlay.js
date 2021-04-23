import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div></div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <>
      <section className="frame_container">
        <iframe
          className="frame_container__video"
          title="video player"
          src={videoSrc}
        />
      </section>
    </>
  );
};

export default VideoDetail;
