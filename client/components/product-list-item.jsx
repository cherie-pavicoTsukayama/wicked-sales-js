import React from 'react';

export default function ProductListItem(props) {
  const price = '' + props.product.price;
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

  const image = props.product.image.split(',');
  function handledClickAddToCart() {
    props.addToCart(props.product, 1);
  }

  return (
    <div key={props.product.productId} className="card item-card shadow-sm mb-3 pb-3 pointer overflow-hidden " >
      <img className="card-img-top pointer mt-4 grow " src={image[0]} alt="" id={props.product.productId} onClick={props.onClick}/>
      <div className="card-body pointer d-flex flex-wrap" id={props.product.productId}>
        <h5 className="card-title pointer" id={props.product.productId} onClick={props.onClick}>{props.product.name} </h5>
        <p className="text-muted pointer col-12 p-0" id={props.product.productId} onClick={props.onClick}>{convertedPrice}</p>
        <div className="col-12 p-0">
          <button className="btn large-orange-button col-12 px-2" onClick={handledClickAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
