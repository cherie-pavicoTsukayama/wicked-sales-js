import React from 'react';
import Quantity from './quantity-control';
export default class CartSummaryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: null
    };
    this.convertedPrice = this.convertedPrice.bind(this);
    this.convertImage = this.convertImage.bind(this);
    this.setQuantity = this.setQuantity.bind(this);
    this.handleClickIncreaseQuantity = this.handleClickIncreaseQuantity.bind(this);
  }

  convertImage() {
    const imageArray = this.props.product.image.split(',');
    return imageArray[0];

  }

  setQuantity() {
    this.setState({ quantity: this.props.product.count });
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

  handleClickIncreaseQuantity(productId) {
    // console.log('clicked, productId:', productId);
    const quantity = this.state.quantity;
    const newQuantity = parseInt(quantity) + 1;
    this.setState({
      quantity: newQuantity
    });

  }

  componentDidMount() {
    this.setQuantity();
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
                quantity={this.state.quantity}
                handleClickIncrease={this.handleClickIncreaseQuantity}
                productId={this.props.product.productId}/>
              <button className="btn" onClick={() => this.props.deleteItem(this.props.product.cartItemId)}>
                <i className="far fa-trash-alt col-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
