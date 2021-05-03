import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoPlay from "./VideoPlay";
import VideoDetail from "./VideoDetail";
import Tv from "./Tv";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <>
      <div className="main_container">
        <SearchBar onFormSubmit={search} />
        <Tv />
        <VideoPlay video={selectedVideo} />
        <VideoDetail video={selectedVideo} />
        <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
      </div>
    </>
  );
};

export default App;
