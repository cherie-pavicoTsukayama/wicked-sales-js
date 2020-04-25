import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.createSummaryCards = this.createSummaryCards.bind(this);
  }

  createSummaryCards() {
    const cartSummary = this.props.items.map(item => {
      return <CartSummaryItem key={item.cartItemId} product={item} onClick={this.handleClick} />;
    });
    return cartSummary;
  }

  render() {
    return (
      <div className="container">
        <div>
          <p className="pointer col-sm-3 pt-3 pl-0 pr-0" onClick={this.handleClickBackToCatalog}>&lt; Back to catalog</p>
          <h1>My Cart</h1>
        </div>
        <div className="d-flex flex-wrap justify-content-between mt-5 mb-5">
          {this.createSummaryCards()}
        </div>
      </div>

    );
  }
}
