import React from 'react';

export default function Carousel() {
  return (
    <div className="row">
      <button id="prev" className="btn carousel-button">
        <i className="fas fa-chevron-left"></i>
      </button>
      <div className="carousel-container">
        <div id="parentBox" className="carousel-box d-flex">
          <div className="siblings sibling-one">

          </div>
          <div className="siblings sibling-two">

          </div>
        </div>
      </div>
      <button id="next" className=" btn carousel-button">
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}
