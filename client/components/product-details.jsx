import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.handleClickBackToCatalog = this.handleClickBackToCatalog.bind(this);
  }

  convertPrice(rawPrice) {
    const price = '' + rawPrice;
    let convertedPrice = '$';
    if (price.length < 4) {
      for (let i = 0; i < (price.length - 2); i++) {
        convertedPrice += (price[i] + '.');
        convertedPrice += price.slice(0, 2);
      }
    } else {
      convertedPrice += (price.slice(0, 2) + '.' + price.slice(2, 4));
    }
    return convertedPrice;
  }

  handleClickBackToCatalog(event) {
    this.props.setView('catalog', { productId: {} });
  }

  componentDidMount() {
    fetch(`api/products/${this.props.productId.productId}`)
      .then(res => res.json())
      .then(data => this.setState({ product: data }))
      .catch(err => console.error(err));
  }

  render() {
    if (this.state.product === null) {
      return null;
    } else {
      return (
        <div className="container mt-3 mb-5">
          <div className="card d-flex flex-nowrap">
            <div className="col-sm-3 pt-3 pl-5">
              <p className="pointer" onClick={ this.handleClickBackToCatalog }>&lt; Back to catalog</p>
            </div>
            <div className="row no-gutters p-2 pt-3 d-flex justify-content-around">
              <img className="col-sm-5 mr-2" src={this.state.product.image} alt="" />
              <div className="col-sm-6">
                <h1>{this.state.product.name}</h1>
                <h2 className="text-muted">{ this.convertPrice(this.state.product.price) }</h2>
                <p> {this.state.product.shortDescription}</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
            <div className="pr-5 pl-5 pb-3 pt-3">
              <p>{this.state.product.longDescription}</p>
            </div>
          </div>

        </div>
      );
    }
  }

}
