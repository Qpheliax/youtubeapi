import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div></div>;
  }
  return (
    <>
      <section className="description_container">
        <h2 className="h2">{video.snippet.title}</h2>
        <p>{video.snippet.description}</p>
      </section>
    </>
  );
};

export default VideoDetail;
