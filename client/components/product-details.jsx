import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    fetch('api/products/1')
      .then(res => res.json())
      .then(data => this.setState({ product: data }))
      .catch(err => console.error(err));
  }

  render() {
    if (this.state.product === null) {
      return null;
    } else {
      return (
        <div className="container ">
          <div className="d-flex flex-nowrap">
            <img className="col-sm-7" src={this.state.product.image} alt="" />
            <div className="col-sm-5">
              <h1>Product Name</h1>
              <h2 className="text-muted">Price</h2>
              <p> { this.state.product.shortDescription }</p>
            </div>
          </div>
          <div>
            <p>{this.state.product.longDescription}</p>
          </div>
        </div>
      );
    }
  }

}
