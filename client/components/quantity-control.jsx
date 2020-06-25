import React from 'react';

export default function Quantity(props) {
  return (
    <div className="d-flex">
      <button className="border col-2 d-flex justify-content-center">
        <i className="fas fa-minus fa-sm align-self-center"></i>
      </button>
      <div className="border-top border-bottom col-3 d-flex justify-content-center">
        <h5 className="text-center align-self-center m-0">1</h5>
      </div>
      <button className="border col-2 d-flex justify-content-center">
        <i className="fas fa-plus fa-sm align-self-center"></i>
      </button>
    </div>
  );
}
