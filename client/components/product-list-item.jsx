import React from 'react';

export default function ProductListItem(props) {
  const price = '' + props.product.price;
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
    <div key={props.product.productId} className="card item-card shadow-sm mb-3">
      <img className="card-img-top" src={props.product.image} alt="" />
      <div className="card-body">
        <h5 className="card-title">{props.product.name}</h5>
        <p className="text-muted">{convertedPrice}</p>
        <p className="card-text">
          {props.product.shortDescription}
        </p>
      </div>
    </div>
  );
}
