// components/Homepage.jsx
import React, { useRef } from "react";
import "../styles/global.css";

function Homepage() {
  const audioRef = useRef(null);

  return (
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

        <audio id="main-audio" ref={audioRef} controls className="visible">
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
  );
}

export default Homepage;
