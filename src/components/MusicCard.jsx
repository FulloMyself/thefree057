// components/MusicCard.jsx
import React from "react";

function MusicCard({ track, onPlay, onAddToCart }) {
  return (
    <div className="music-card">
      <img src={`${import.meta.env.BASE_URL}${track.cover}`} alt={track.title} className="cover-art" />
      <h3>{track.title}</h3>
      <p>{track.artist}</p>
      <p>{track.genre}</p>
      <p>R{track.price}</p>
      <div className="music-actions">
        <button onClick={onPlay}>Play</button>
        <button onClick={onAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default MusicCard;