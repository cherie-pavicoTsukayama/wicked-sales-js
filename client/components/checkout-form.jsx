import React from 'react';

export default class CheckoutForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleClickPlaceOrder = this.handleClickPlaceOrder.bind(this);
  }

  handleClickPlaceOrder() {

  }

  render() {

    return (
      <div className="container card col-6 mt-5 p-5">
        <h1>Checkout</h1>
        <h3 className="text-muted mb-3">Order Total: $0.00</h3>
        <div>
          <form action="submit" >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name"/>
            </div>
            <div className="form-group">
              <label htmlFor="credit-card">Credit Card</label>
              <input type="text" className="form-control" id="credit-card" />
            </div>
            <div className="form-group">
              <label htmlFor="shipping-address">Shipping Address</label>
              <textarea className="form-control" name="shipping-address" id="shipping-address" cols="30" rows="5"></textarea>
            </div>
          </form>
        </div>
        <div className="d-flex flex-nowrap justify-content-between mt-4 align-items-center">
          <p className="m-0">&lt; Continue Shopping</p>
          <button type="submit" onClick={this.handleClickPlaceOrder} className="btn btn-primary">Place Order</button>
        </div>
      </div>
    );
  }
}
