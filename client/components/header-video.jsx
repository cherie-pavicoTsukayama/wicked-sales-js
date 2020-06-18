import React from 'react';

export default function HeaderVideo() {

  return (
    <div className="hero d-flex align-items-center justify-content-center">
      <div className="hero-text container d-flex flex-wrap justify-content-center">
        <h1 className="col-12 text-uppercase p-0 text-center text-size-4 permanent-marker">Play Well</h1>
        <h3 className="col-12 text-center">Only the best is good enough</h3>
      </div>
      <div className="header-video">
        <video autoPlay loop muted>
          <source src="images/Hero Video-Technicali-hb.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
