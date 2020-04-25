import React from 'react';

export default function CartSummaryItem(item) {
  const price = '' + item.product.price;
  let convertedPrice = '$';
  if (price.length < 4) {
    for (let i = 0; i < (price.length - 2); i++) {
      convertedPrice += (price[i] + '.');
      convertedPrice += price.slice(0, 2);
    }
  } else {
    convertedPrice += (price.slice(0, 2) + '.' + price.slice(2, 4));
  }

  return (
    <div className="card mb-5">
      <div className="row no-gutters p-2 pt-3  d-flex justify-content-around shadow-sm align-items-center">
        <img className="col-sm-5 mr-2" src={item.product.image} alt="" />
        <div className="col-sm-6">
          <h1>{item.product.name}</h1>
          <h2 className="text-muted">{convertedPrice}</h2>
          <p> {item.product.shortDescription}aveaveaea</p>
        </div>
      </div>
    </div>

  );
}
