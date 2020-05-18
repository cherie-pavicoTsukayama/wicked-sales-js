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
    this.props.placeOrder(this.state);
    this.setState({
      name: '',
      creditCard: '',
      shippingAddress: ''
    });
    event.target.reset();
    this.props.setView('catalog', {});
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
          <form action="submit" id="checkoutForm" >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" onChange={ this.handleChangeName }/>
            </div>
            <div className="form-group">
              <label htmlFor="credit-card">Credit Card</label>
              <input type="text" className="form-control" id="credit-card" onChange={ this.handleChangeCreditCard }/>
            </div>
            <div className="form-group">
              <label htmlFor="shipping-address">Shipping Address</label>
              <textarea className="form-control" name="shipping-address" id="shipping-address" cols="30" rows="5" onChange={ this.handleChangeShippingAddress }></textarea>
            </div>
          </form>
        </div>
        <div className="d-flex flex-nowrap justify-content-between mt-4 align-items-center">
          <p className="m-0 pointer" onClick={ this.handleClickBackToCatalog }>&lt; Continue Shopping</p>
          <button type="submit" onClick={ this.handleSubmitPlaceOrder } className="btn btn-primary">Place Order</button>
        </div>
      </div>
    );
  }
}
