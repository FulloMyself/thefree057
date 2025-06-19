// components/Homepage.jsx
import React, { useRef } from "react";
import "../styles/global.css";

function Homepage() {
  const overlayRef = useRef(null);
  const audioRef = useRef(null);

  const handlePlay = () => {
    const audio = audioRef.current;
    const overlay = overlayRef.current;

    if (audio) {
      audio.currentTime = 0;
      audio.play()
        .then(() => {
          overlay.classList.add("hidden");
          audio.classList.add("visible");
        })
        .catch((err) => {
          alert("Autoplay blocked or failed. Try again.");
          console.error(err);
        });
    }
  };

  return (
    <>
      <div id="audioOverlay" ref={overlayRef} className="audio-overlay">
        <div className="overlay-content">
          <h2>🎧 Experience The Free 057</h2>
          <button onClick={handlePlay}>Click to Play</button>
        </div>
      </div>

      <section className="hero">
        <div className="hero-content">
          <img
            src={`${import.meta.env.BASE_URL}music/the-free-logo.jpg`}
            alt="The Free 057 Logo"
            className="hero-logo"
          />
          <h1>"Welkom" to The Free Recordings</h1>
          <div className="sliding-text-wrapper">
            <p className="sliding-text">
              Where beats meet the streets. Dive into the sound of the 057.
            </p>
          </div>

          <audio id="main-audio" ref={audioRef} controls>
            <source
              src={`${import.meta.env.BASE_URL}music/thefree057 - Go Big Or Go To Hell.mp3`}
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>

          <div className="hero-buttons">
            <a
              href={`${import.meta.env.BASE_URL}music/thefree057 - Go Big Or Go To Hell.mp3`}
              className="download-btn"
              download
            >
              Download Track
            </a>
            <a href="#explore" className="explore-btn">
              Explore More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;
