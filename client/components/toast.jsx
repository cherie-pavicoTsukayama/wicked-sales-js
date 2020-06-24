import React from 'react';

export default function Toast(props) {
  const { name } = props.product;
  return (
    <div className='toast-container d-flex justify-content-center col-12 p-0 '>
      <div className={`${props.display}`}>
        <p className="text-center m-0 align-self-center">{`${name} has been added to your cart`}.</p>
      </div>
    </div>
  );
}
