import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      images: []
    };
    this.handleClickBackToCatalog = this.handleClickBackToCatalog.bind(this);
    this.handleClickAddToCart = this.handleClickAddToCart.bind(this);

  }

  convertPrice(rawPrice) {
    const price = '' + rawPrice;
    let convertedPrice = '$';
    if (price.length < 4) {
      for (let i = 0; i < (price.length - 2); i++) {
        convertedPrice += (price[i] + '.');
        convertedPrice += price.slice(0, 2);
      }
    } else if (price.length > 4) {
      convertedPrice += (price.slice(0, -2) + '.' + price.slice(-2));
    } else {
      convertedPrice += (price.slice(0, 2) + '.' + price.slice(2, 4));
    }
    return convertedPrice;
  }

  handleClickBackToCatalog(event) {
    this.props.setView('catalog', { productId: {} });
  }

  handleClickAddToCart() {
    this.props.addToCart(this.state.product);
  }

  componentDidMount() {
    fetch(`api/products/${this.props.productId.productId}`)
      .then(res => res.json())
      .then(data => {
        const imageArray = data.image.split(',');
        this.setState({
          product: data,
          images: imageArray
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    if (this.state.product === null) {
      return null;
    } else {
      return (
        <div className="container mt-3 mb-5">
          <div className="col-sm-5 pt-3 pl-3 spacing">
            <p className="pointer" onClick={this.handleClickBackToCatalog}><i className="fas fa-chevron-circle-left"></i> Back to catalog</p>
          </div>
          <div className="d-flex justify-content-between">
            <div className="card d-flex flex-wrap w-60 mr-4">
              <img className="col mr-2" src={this.state.images[0]} alt="" />
            </div>
            <div className="card col-4 d-flex flex-wrap flex-column justify-content-center">
              <h2>{this.state.product.name}</h2>
              <h3 className="mt-3">{this.convertPrice(this.state.product.price)}</h3>
              <div className="mt-5 d-flex justify-content-around">
                <div className="col-4 d-flex flex-wrap justify-content-center py-3">
                  <i className="fas fa-birthday-cake fa-2x mb-3 grey"></i>
                  <h3 className="col-12">{this.state.product.ages}</h3>
                  <p>Ages</p>
                </div>
                <div className="col-4 d-flex flex-wrap justify-content-center py-3 border-left border-right">
                  <i className="fab fa-simplybuilt fa-2x mb-3 grey "></i>
                  <h3>{this.state.product.pieces}</h3>
                  <p>Pieces</p>
                </div>
                <div className="col-4 d-flex flex-wrap justify-content-center py-3">
                  <i className="fas fa-hashtag fa-2x mb-3 grey"></i>
                  <h3>{this.state.product.itemNum}</h3>
                  <p>Item#</p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="card d-flex flex-nowrap">
            <div className="row no-gutters p-2 pt-3 d-flex justify-content-around">
              <img className="col-sm-5 mr-2" src={this.state.images[0]} alt="" />
            </div>
              <div className="col-sm-6">
                <h1>{this.state.product.name}</h1>
                <h2 className="text-muted">{ this.convertPrice(this.state.product.price) }</h2>
                <p> {this.state.product.shortDescription}</p>
                <button
                  onClick={ this.handleClickAddToCart }
                  className="btn btn-primary"
                  type="button">
                    Add to Cart
                </button>
              </div>
            </div>
            <div className="pr-5 pl-5 pb-3 pt-3">
              <p>{this.state.product.longDescription}</p>
            </div>
          </div> */}

        </div>
      );
    }
  }

}
