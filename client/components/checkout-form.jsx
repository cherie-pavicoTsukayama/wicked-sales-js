import React from 'react';

export default class CheckoutForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: '',
      city: '',
      state: '',
      zipCode: '',
      expirationMonth: ''
    };
    this.handleSubmitPlaceOrder = this.handleSubmitPlaceOrder.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeCreditCard = this.handleChangeCreditCard.bind(this);
    this.handleChangeShippingAddress = this.handleChangeShippingAddress.bind(this);
    this.handleClickBackToCatalog = this.handleClickBackToCatalog.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeState = this.handleChangeState.bind(this);
    this.handleChangeZipCode = this.handleChangeZipCode.bind(this);
    this.handleChangeExpirationMonth = this.handleChangeExpirationMonth.bind(this);
    this.handleChangeExpirationYear = this.handleChangeExpirationYear.bind(this);
    this.handleChangeSecurityCode = this.handleChangeSecurityCode.bind(this);
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

  handleChangeCity() {
    this.setState({
      city: event.target.value
    });
  }

  handleChangeState() {
    this.setState({
      state: event.target.value
    });
  }

  handleChangeZipCode() {
    this.setState({
      zipCode: event.target.value
    });
  }

  handleChangeExpirationMonth() {
    this.setState({
      expirationMonth: event.target.value
    });
  }

  handleChangeExpirationYear() {
    this.setState({
      expirationYear: event.target.value
    });
  }

  handleChangeSecurityCode() {
    this.setState({
      securityCode: event.target.value
    });
  }

  handleSubmitPlaceOrder(event) {
    event.preventDefault();
    const {
      name,
      creditCard,
      shippingAddress,
      city,
      state,
      zipCode,
      expirationMonth,
      expirationYear,
      securityCode
    } = this.state;
    if (name !== '' && creditCard !== '' && shippingAddress !== '' && city !== '' && state !== '' && zipCode !== '' && expirationMonth !== '' && expirationYear !== '' && securityCode !== '') {
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
        <h5>Billing Details</h5>
        <div>
          <form id="checkoutForm" onSubmit={this.handleSubmitPlaceOrder} >
            <label className="m-0 " htmlFor="name">First & last name</label>
            <input
              required
              type="text"
              className="form-control mb-4"
              id="name"
              onChange={this.handleChangeName}/>
            <label className="m-0" htmlFor="shipping-address">Address</label>
            <input
              required
              className="form-control mb-3"
              name="shipping-address"
              id="shipping-address"
              onChange={this.handleChangeShippingAddress}></input>
            <label className="m-0" htmlFor="credit-card"></label>
            <div className="d-flex flex-wrap col-sm-12 p-0">
              <div className="col p-0">
                <label className="m-0" htmlFor="shipping-address">City</label>
                <input
                  required
                  className="form-control mb-4"
                  name="shipping-address"
                  id="shipping-address"
                  onChange={this.handleChangeCity}></input>
              </div>
              <div className="col p-0 mx-3">
                <label className="m-0" htmlFor="state">State</label>
                <select
                  required
                  className="custom-select mb-4"
                  name="state"
                  id="state"
                  onChange={this.handleChangeState}>
                  <option value=''>Select a state</option>
                  <option value="Alabama">Alabama</option>
                  <option value="Alaska">Alaska</option>
                  <option value="Arizona">Arizona</option>
                  <option value="Arkansas">Arkansas</option>
                  <option value="California">California</option>
                  <option value="Colorado">Colorado</option>
                  <option value="Connecticut">Connecticut</option>
                  <option value="Delaware">Delaware</option>
                  <option value="Florida">Florida</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Hawaii">Hawaii</option>
                  <option value="Idaho">Idaho</option>
                  <option value="IllinoisIndiana">IllinoisIndiana</option>
                  <option value="Iowa">Iowa</option>
                  <option value="Kansas">Kansas</option>
                  <option value="Kentucky">Kentucky</option>
                  <option value="Louisiana">Louisiana</option>
                  <option value="Maine">Maine</option>
                  <option value="Maryland">Maryland</option>
                  <option value="Massachusetts">Massachusetts</option>
                  <option value="Michigan">Michigan</option>
                  <option value="Minnesota">Minnesota</option>
                  <option value="Mississippi">Mississippi</option>
                  <option value="Missouri">Missouri</option>
                  <option value="MontanaNebraska">MontanaNebraska</option>
                  <option value="Nevada">Nevada</option>
                  <option value="New Hampshire">New Hampshire</option>
                  <option value="New Jersey">New Jersey</option>
                  <option value="New Mexico">New Mexico</option>
                  <option value="New York">New York</option>
                  <option value="North Carolina">North Carolina</option>
                  <option value="North Dakota">North Dakota</option>
                  <option value="Ohio">Ohio</option>
                  <option value="Oklahoma">Oklahoma</option>
                  <option value="Oregon">Oregon</option>
                  <option value="PennsylvaniaRhode Island">PennsylvaniaRhode Island</option>
                  <option value="South Carolina">South Carolina</option>
                  <option value="South Dakota">South Dakota</option>
                  <option value="Tennessee">Tennessee</option>
                  <option value="Texas">Texas</option>
                  <option value="Utah">Utah</option>
                  <option value="Vermont">Vermont</option>
                  <option value="Virginia">Virginia</option>
                  <option value="Washington">Washington</option>
                  <option value="West Virginia">West Virginia</option>
                  <option value="Wisconsin">Wisconsin</option>
                  <option value="Wyoming">Wyoming</option>
                </select>
              </div>
              <div className="col p-0">
                <label className="m-0" htmlFor="zip">Zip Code</label>
                <input
                  required
                  maxLength="5"
                  minLength="5"
                  className="form-control mb-4 col-"
                  name="zip"
                  id="zip"
                  onChange={this.handleChangeZipCode}></input>
              </div>
            </div>
            <div className="mt-4">
              <h5>Payment Method</h5>
              <div className="d-flex flex-wrap align-items-center justify-content-between border rounded px-4 py-3 mb-3 col">
                <div>
                  <input required className="mr-2" name="cc-method" type="radio" />
                  <label className="m-0" htmlFor="cc-method">Credit Card</label>
                </div>
                <div className="col-6 d-flex justify-content-center align-item-center">
                  <img className="object-fit-width" src="./images/credit-cards.png" alt="" />
                </div>
              </div>

              <label htmlFor="credit-card">Card Number</label>
              <input
                required
                minLength="16"
                maxLength="16"
                type="text"
                className="form-control mb-4"
                id="credit-card"
                name="credit-card"
                onChange={this.handleChangeCreditCard} />

              <div className='d-flex flex-wrap'>
                <div className="d-flex flex-wrap col-sm-12 p-0">
                  <label className="col-12 p-0" htmlFor="expMonth">Expiration Date</label>
                  <div className="col-6 pl-0">
                    <select
                      required
                      className="custom-select mb-4"
                      name="expMonth"
                      id="expMonth"
                      onChange={this.handleChangeExpirationMonth}>
                      <option value=""> Month </option>
                      <option value="01"> 01 </option>
                      <option value="02"> 02 </option>
                      <option value="03"> 03 </option>
                      <option value="04"> 04 </option>
                      <option value="05"> 05 </option>
                      <option value="06"> 06 </option>
                      <option value="07"> 07 </option>
                      <option value="08"> 08 </option>
                      <option value="09"> 09 </option>
                      <option value="10"> 10 </option>
                      <option value="11"> 11 </option>
                      <option value="12"> 12 </option>
                    </select>
                  </div>
                  <div className="col-6 pl-0">
                    <select
                      required
                      className="custom-select mb-4"
                      name="expYear"
                      id="expYear"
                      onChange={this.handleChangeExpirationYear}>
                      <option value=""> Year </option>
                      <option value="2020"> 2020 </option>
                      <option value="2021"> 2021 </option>
                      <option value="2022"> 2022</option>
                      <option value="2023"> 2023 </option>
                      <option value="2024"> 2024 </option>
                      <option value="2025"> 2025 </option>
                      <option value="2026"> 2026 </option>
                      <option value="2027"> 2027 </option>
                      <option value="2028"> 2028 </option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="securityCode">Security Code</label>
                  <input
                    required
                    type="text"
                    className="form-control mb-4"
                    id="securityCode"
                    name="securityCode"
                    onChange={this.handleChangeSecurityCode} />
                </div>
              </div>
            </div>
            <div className="d-flex mt-4">
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
