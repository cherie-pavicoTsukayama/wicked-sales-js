import React from 'react';
import Quantity from './quantity-control';

export default function CartSummaryItem(item) {
  const price = '' + item.product.price;
  const image = item.product.image.split(',');
  let convertedPrice = '$';
  if (price.length < 4) {
    for (let i = 0; i < (price.length - 2); i++) {
      convertedPrice += (price[i] + '.');
      convertedPrice += price.slice(0, 2);
    }
  } else if (price.length > 4) {
    convertedPrice += (price.slice(0, -2) + '.' + price.slice(-2));
  } else {
    convertedPrice += (price.slice(0, 2) + '.' + price.slice(2, 4));
  }
  // console.log(item);
  return (
    <div className="card mb-5">
      <div className="row no-gutters p-2 pt-3  d-flex justify-content-around shadow-sm align-items-center">
        <div className="col-sm-1">
          <img className="cart-image" src={image[0]} alt="" />
        </div>
        <div className="col-sm-2">
          <p className="font-weight-bold">{item.product.name}</p>
          <h1>{item.product.itemNum}</h1>
          <p className="font-weight-bold">{convertedPrice}</p>
          {/* <p> {item.product.shortDescription}</p> */}
        </div>
        <div className="d-flex col-sm-9 align-items-center justify-content-center">
          <div className="col-12 d-flex justify-content-center">
            <Quantity />
            <button className="btn">
              <i className="far fa-trash-alt col-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
