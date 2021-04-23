import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoPlay from "./VideoPlay";
import VideoDetail from "./VideoDetail";
import Tv from "./Tv";
import youtube from "../apis/youtube";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: null,
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <>
        <div className="main_container">
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <Tv />
          <VideoPlay video={this.state.selectedVideo} />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={this.onVideoSelect}
            videos={this.state.videos}
          />
        </div>
      </>
    );
  }
}

export default App;
