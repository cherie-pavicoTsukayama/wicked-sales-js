import React from 'react';

export default class CheckoutForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
    this.handleSubmitPlaceOrder = this.handleSubmitPlaceOrder.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeCreditCard = this.handleChangeCreditCard.bind(this);
    this.handleChangeShippingAddress = this.handleChangeShippingAddress.bind(this);
    this.handleClickBackToCatalog = this.handleClickBackToCatalog.bind(this);
  }

  handleChangeName() {
    this.setState({
      name: event.target.value
    });
  }

  handleChangeCreditCard() {
    this.setState({
      creditCard: event.target.value
    });
  }

  handleChangeShippingAddress() {
    this.setState({
      shippingAddress: event.target.value
    });
  }

  handleSubmitPlaceOrder(event) {
    event.preventDefault();
    const { name, creditCard, shippingAddress } = this.state;
    if (name !== '' && creditCard !== '' && shippingAddress !== '') {
      this.props.placeOrder(this.state);
      this.props.setView('catalog', {});
    }
  }

  handleClickBackToCatalog() {
    this.props.setView('catalog', {});
  }

  render() {

    return (
      <div className="container card col-6 mt-5 p-5">
        <h1>Checkout</h1>
        <h3 className="text-muted mb-3">Order Total: $0.00</h3>
        <div>
          <form id="checkoutForm" onSubmit={this.handleSubmitPlaceOrder} >
            <label htmlFor="name">Name</label>
            <input
              required
              type="text"
              className="form-control mb-4"
              id="name"
              onChange={this.handleChangeName} />
            <label htmlFor="credit-card">Credit Card</label>
            <input
              required
              type="text"
              className="form-control mb-4"
              id="credit-card"
              onChange={this.handleChangeCreditCard} />
            <label htmlFor="shipping-address">Shipping Address</label>
            <textarea
              required
              className="form-control mb-4"
              name="shipping-address"
              id="shipping-address"
              cols="30"
              rows="5"
              onChange={ this.handleChangeShippingAddress }></textarea>
            <div className="d-flex flex-nowrap justify-content-between mt-4 align-items-center">
              <p className="m-0 pointer" onClick={this.handleClickBackToCatalog}>&lt; Continue Shopping</p>
              <button
                type="submit"
                className="btn btn-primary">
                Place Order
              </button>
            </div>
          </form>
        </div>

      </div>
    );
  }
}
