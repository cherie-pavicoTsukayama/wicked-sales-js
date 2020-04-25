import React from 'react';

export default function Header(props) {
  return (
    <div className=" header pt-3 pb-3 shadow-sm ">
      <header className="container d-flex flex-nowrap justify-content-between">
        <div>
          <h6 className="m-0">
            <i className="fas fa-dollar-sign"> </i> Wicked Sales</h6>
        </div>
        <div>
          <h6 className="m-0"> {props.cartItemCount} <i className="fas fa-shopping-cart fa-lg mr-3 ml-2"></i> </h6>

        </div>
      </header>
    </div>
  );
}
