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
      <div className="container card col-10 col-md-6 mt-5 mb-5 p-3">
        <h1>Checkout</h1>
        <h3 className="text-muted mb-3">Order Total: {this.getTotalPrice()}</h3>
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
            <div className="d-flex">
              <input required className="mt-1" type="checkbox" id="iAgreeCheckOut" name="iAgreeCheckOut" />
              <label className="m-0 ml-2" htmlFor="iAgreeCheckOut">
                I accept that this website is for demonstration purposes, that
                no payment processing will be done, and that personal information
                such as names, addresses, or real credit card numbers should not
                be used on submission of this form.
              </label>
            </div>
            <div className="d-flex flex-nowrap justify-content-between mt-4 align-items-center">
              <p className="m-0 pointer smaller-text" onClick={this.handleClickBackToCatalog}><i className="fas fa-chevron-circle-left"></i> Continue Shopping</p>
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
