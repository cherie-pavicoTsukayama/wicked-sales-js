import React from 'react';

export default function Header(props) {

  function handleClick(event) {
    props.setView('cart', {});
  }

  return (
    <div className=" header pt-3 pb-3 shadow-sm ">
      <header className="container d-flex flex-nowrap justify-content-between">
        <div>
          <h6 className="m-0">
            <i className="fas fa-tools pr-2"></i>Technicali</h6>
        </div>
        <div>
          <h6 className="m-0 pointer text-center" onClick={handleClick}> {props.cartItemCount} Items<i className="fas fa-shopping-cart fa-lg mr-3 ml-2"></i> </h6>
        </div>
      </header>
    </div>
  );
}
