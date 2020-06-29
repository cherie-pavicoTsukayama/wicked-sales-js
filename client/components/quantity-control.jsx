import React from 'react';

export default function Quantity(props) {
  let muted = '';
  let disable = false;
  if (props.quantity === 1) {
    muted = 'muted-button';
    disable = true;
  }

  return (
    <div className="d-flex mt-4">
      <button
        className={`border col-2 d-flex justify-content-center white-bg ${muted}`}
        onClick={props.handleClickDecrease} disabled={ disable }>
        <i className="fas fa-minus fa-sm align-self-center"></i>
      </button>
      <div className="border-top border-bottom col-3 d-flex justify-content-center">
        <h5 className="text-center align-self-center m-0">{ props.quantity }</h5>
      </div>
      <button
        className="border col-2 d-flex justify-content-center white-bg"
        onClick={ props.handleClickIncrease }>
        <i className="fas fa-plus fa-sm align-self-center"></i>
      </button>
    </div>
  );
}
