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
    <div key={props.product.productId} className="card item-card shadow-sm mb-3 pointer" >
      <img className="card-img-top pointer" src={props.product.image} alt="" id={props.product.productId} onClick={props.onClick}/>
      <div className="card-body pointer" id={props.product.productId} onClick={props.onClick}>
        <h5 className="card-title pointer" id={props.product.productId} onClick={props.onClick}>{props.product.name} </h5>
        <p className="text-muted pointer" id={props.product.productId} onClick={props.onClick}>{convertedPrice}</p>
        <p className="card-text pointer" id={props.product.productId} onClick={props.onClick}>
          {props.product.shortDescription}
        </p>
      </div>
    </div>
  );
}
