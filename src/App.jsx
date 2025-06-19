// App.jsx
import React, { useState } from "react";
import musicLibrary from "./data/musicLibrary.json";
import MusicCard from "./components/MusicCard";
import AudioPlayer from "./components/AudioPlayer";
import Cart from "./components/Cart";
import Homepage from "./components/Homepage";
import "./styles/global.css";

function App() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (track) => {
    if (!cart.find((item) => item.id === track.id)) {
      setCart([...cart, track]);
    }
  };

  return (
    <div className="app-container">
      <Homepage />

      <section id="explore" className="explore-section">
        <h1>About The Free Recordings</h1>
        <p>
          We are a recording movement born in the Free State. Join the wave and
          explore our sound, talent, and culture.
        </p>

        <div className="featured-section">
          <h2>🎵 Featured Tracks</h2>
          <div className="music-grid">
            {musicLibrary.map((track) => (
              <MusicCard
                key={track.id}
                track={track}
                onPlay={() => setCurrentTrack(track)}
                onAddToCart={() => addToCart(track)}
              />
            ))}
          </div>
        </div>
      </section>

      {currentTrack && (
        <AudioPlayer
          track={currentTrack}
          onClose={() => setCurrentTrack(null)}
          onAddToCart={() => addToCart(currentTrack)}
        />
      )}

      <Cart items={cart} />

      <footer className="site-footer">
        <div className="footer-content">
          <p>© 2025 The Free Recordings. All rights reserved.</p>
          <div class="social-links">

        <a href="https://soundcloud.com/thefreerecordings" target="_blank" title="SoundCloud" aria-label="SoundCloud">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 8.012c-.264 0-.52.027-.768.076A5.59 5.59 0 0 0 11 3.478v12.03h5.5a3.497 3.497 0 0 0 0-6.996zm-6.625.49a.52.52 0 0 0-.52.52v6.25a.52.52 0 1 0 1.04 0v-6.25a.52.52 0 0 0-.52-.52zM8.3 8.746a.52.52 0 0 0-.52.52v6.25a.52.52 0 0 0 1.04 0v-6.25a.52.52 0 0 0-.52-.52zm-2.08.458a.52.52 0 0 0-.52.52v6.25a.52.52 0 0 0 1.04 0v-6.25a.52.52 0 0 0-.52-.52zm-2.055.664a.52.52 0 0 0-.52.52v5.16a.52.52 0 0 0 1.04 0v-5.16a.52.52 0 0 0-.52-.52z"/>
          </svg>
        </a>

        <a href="https://thefreerecordings.bandcamp.com" target="_blank" title="Bandcamp" aria-label="Bandcamp">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.227 12L15.682 3H3.273L9.818 12l-6.545 9h12.409L22.227 12zM4.636 4.5h10.182L20.045 12l-5.227 7.5H4.636L10.591 12 4.636 4.5z"/>
          </svg>
        </a>
        </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
