// components/AudioPlayer.jsx
import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import "../styles/global.css";

function AudioPlayer({ track, onClose, onAddToCart }) {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (waveformRef.current && track.audio) {
      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#ddd",
        progressColor: "#2196f3",
        height: 60,
        responsive: true,
      });
      wavesurfer.current.load(`${import.meta.env.BASE_URL}${track.audio}`);

      // Play automatically when ready
      wavesurfer.current.on("ready", () => {
        wavesurfer.current.play();
        setPlaying(true);
      });

      wavesurfer.current.on("finish", () => setPlaying(false));
    }
    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }
    };
  }, [track.audio]);

  const togglePlay = () => {
    if (wavesurfer.current) {
      wavesurfer.current.playPause();
      setPlaying(wavesurfer.current.isPlaying());
    }
  };

  return (
    <div className="audio-player">
      <h4>Now Playing: {track.title}</h4>
      <div ref={waveformRef} className="waveform" />
      <button onClick={togglePlay}>{playing ? "Pause" : "Play"}</button>
      <button className="add-to-cart" onClick={() => onAddToCart && onAddToCart(track)}>
        Add To Cart
      </button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default AudioPlayer;