// components/AudioPlayer.jsx
import React from "react";

function AudioPlayer({ track, onClose }) {
  return (
    <div className="audio-player">
      <h4>Now Playing: {track.title}</h4>
      <audio controls autoPlay src={track.audio}>
        Your browser does not support the audio element.
      </audio>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default AudioPlayer;