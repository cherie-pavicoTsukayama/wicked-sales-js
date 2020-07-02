import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.createSummaryCards = this.createSummaryCards.bind(this);
    this.handleClickBackToCatalog = this.handleClickBackToCatalog.bind(this);
    this.makeCheckoutButton = this.makeCheckoutButton.bind(this);
    this.handleClickCheckOutButton = this.handleClickCheckOutButton.bind(this);
  }

  handleClickBackToCatalog() {
    this.props.setView('catalog', {});
  }

  createSummaryCards() {
    if (this.props.items.length === 0) {
      return (
        <div className="card col-12 text-center text-muted pt-2 pb-2">
          <h3 className="m-0">No items in cart</h3>
        </div>
      );
    } else {
      const cartSummary = this.props.items.map(item => {
        return <CartSummaryItem
          key={item.itemNum}
          product={item}
          onClick={this.handleClick}
          deleteItem={this.props.deleteItem}/>;
      });
      return cartSummary;
    }
  }

  getTotalPrice() {
    const items = this.props.items;
    let convertedTotal = '$';
    if (items.length === 0) {
      convertedTotal = '$0.00';
      return convertedTotal;
    } else {
      let total = 0;
      for (let i = 0; i < items.length; i++) {
        total += items[i].price;
      }
      const stringTotal = total.toString();

      for (let i = 0; i < (stringTotal.length - 2); i++) {
        convertedTotal += stringTotal[i];
      }
      convertedTotal += ('.' + stringTotal.slice(-2));
      return convertedTotal;
    }
  }

  makeCheckoutButton() {
    if (this.props.items.length !== 0) {
      return (
        <button type="button" className="btn btn-primary" onClick={this.handleClickCheckOutButton}>Checkout</button>
      );
    }
  }

  handleClickCheckOutButton() {
    this.props.setView('checkout', {});
  }

  render() {
    return (
      <div className="container">
        <div>
          <p className="pointer col-sm-3 pt-3 pl-0 pr-0" onClick={this.handleClickBackToCatalog}><i className="fas fa-chevron-circle-left"></i> Back to catalog</p>
          <h1>My Cart</h1>
        </div>
        <div className="d-flex flex-wrap justify-content-between mt-5">
          {this.createSummaryCards()}
        </div>
        <div className="d-flex flex-nowrap justify-content-between">
          <h3 className="mb-5">Item Total:  {this.getTotalPrice()}</h3>
          <div>{ this.makeCheckoutButton() }</div>
        </div>
      </div>

    );
  }
}
