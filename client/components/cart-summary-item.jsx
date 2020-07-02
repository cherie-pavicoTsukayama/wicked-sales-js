import React from 'react';
import Quantity from './quantity-control';
// import { ProgressPlugin } from 'webpack';

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
  return (
    <div className="card mb-5">
      <div className="row no-gutters p-2 pt-3  d-flex justify-content-around shadow-sm align-items-center">
        <div className="col-sm-1 mr-3">
          <img className="cart-image" src={image[0]} alt="" />
        </div>
        <div className="col-sm-2">
          <p className="font-weight-bold m-0">{item.product.name}</p>
          <p className="text-muted cart-item-number">Item# {item.product.itemNum}</p>
          <p className="text-muted cart-item-number">QTY: {item.product.count}</p>
          <p className="font-weight-bold">{convertedPrice}</p>
        </div>
        <div className="d-flex col-sm-8 align-items-center justify-content-center">
          <div className="col-12 d-flex justify-content-center">
            <Quantity quantity={ item.product.count }/>
            <button className="btn" onClick={() => item.deleteItem(item.product.productId)}>
              <i className="far fa-trash-alt col-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
