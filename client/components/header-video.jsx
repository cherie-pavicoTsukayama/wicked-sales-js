import React from 'react';

export default function HeaderVideo() {
  return (
    <div className="hero d-flex align-items-center justify-content-center">
      <div className="hero-text container">
        <h1 className="col-6 text-uppercase p-0">Play Well.</h1>
        <h3>Only the best is good enough.</h3>
        <button id="getStartedButton" className="get-started-button text-uppercase">Get Started</button>
      </div>
      <div className="header-video">
        <video autoPlay loop muted>
          <source src="images/Hero Video-Technicali-hb.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
