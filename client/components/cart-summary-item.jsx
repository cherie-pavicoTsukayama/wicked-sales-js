import React from 'react';
import Quantity from './quantity-control';
export default class CartSummaryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    };
    this.convertedPrice = this.convertedPrice.bind(this);
    this.convertImage = this.convertImage.bind(this);
  }

  convertImage() {
    const imageArray = this.props.product.image.split(',');
    return imageArray[0];

  }

  convertedPrice() {
    const price = '' + this.props.product.price;
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
    return convertedPrice;
  }

  componentDidMount() {

    fetch(`/api/products/${this.props.product.productId}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ product: data });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="card mb-5">
        <div className="row no-gutters p-2 pt-3  d-flex justify-content-around shadow-sm align-items-center">
          <div className="col-sm-1 mr-3">
            <img className="cart-image" src={this.convertImage()} alt="" />
          </div>
          <div className="col-sm-2">
            <p className="font-weight-bold m-0">{this.props.product.name}</p>
            <p className="text-muted cart-item-number">Item# {this.props.product.itemNum}</p>
            <p className="text-muted cart-item-number">QTY: {this.props.product.count}</p>
            <p className="font-weight-bold">{this.convertedPrice()}</p>
          </div>
          <div className="d-flex col-sm-8 align-items-center justify-content-center">
            <div className="col-12 d-flex justify-content-center">
              <Quantity
                quantity={this.props.product.count}
                handleClickIncrease={this.props.handleClickIncreaseQuantity}
                product={this.state.product}/>
              <button className="btn" onClick={() => this.props.deleteItem(this.props.product.productId)}>
                <i className="far fa-trash-alt col-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
