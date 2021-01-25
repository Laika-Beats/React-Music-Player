import React from "react";

const LibrarySong = ({ currentSong, song }) => {
  return (
    <div className="library-song">
      <img alt={"track cover art"} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
