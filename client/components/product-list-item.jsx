import React from 'react';

export default function ProductListItem(props) {
  function createProductItem() {
    const itemCard = props.products.map((item, index) => {
      const price = '' + item.price;
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
        <div key={item.productId} className="card item-card shadow-sm mb-3">
          <img className="card-img-top" src={item.image} alt="" />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="text-muted">{convertedPrice}</p>
            <p className="card-text">
              {item.shortDescription}
            </p>
          </div>
        </div>
      );
    });
    return itemCard;
  }

  return (
    <div className="d-flex flex-wrap justify-content-between">
      { createProductItem() }
    </div>
  );
}
