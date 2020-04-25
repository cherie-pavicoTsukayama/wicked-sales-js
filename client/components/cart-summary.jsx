import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.createSummaryCards = this.createSummaryCards.bind(this);
  }

  createSummaryCards() {
    const itemCard = this.props.items.map(item => {
      return <CartSummaryItem key={item.cartItemId} product={item} onClick={this.handleClick} />;
    });
    return itemCard;
  }

  render() {
    return (
      <div className="container d-flex flex-wrap justify-content-between mt-5 mb-5">
        {this.createSummaryCards()}
      </div>
    );
  }
}
