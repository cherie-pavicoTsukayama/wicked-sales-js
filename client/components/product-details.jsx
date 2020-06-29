import React from 'react';
import Quantity from './quantity-control';
import Carousel from './carousel';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      images: [],
      quantity: 1,
      mainImage: ''
    };
    this.handleClickBackToCatalog = this.handleClickBackToCatalog.bind(this);
    this.handleClickAddToCart = this.handleClickAddToCart.bind(this);
    this.handleClickQuantityIncrease = this.handleClickQuantityIncrease.bind(this);
    this.handleClickQuantityDecrease = this.handleClickQuantityDecrease.bind(this);
    this.handleClickSelectMainImage = this.handleClickSelectMainImage.bind(this);
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
    this.props.addToCart(this.state.product, this.state.quantity);
  }

  handleClickQuantityIncrease() {
    const quantityIncrease = this.state.quantity;
    this.setState({
      quantity: (quantityIncrease + 1)
    });
  }

  handleClickQuantityDecrease() {
    const quantityIncrease = this.state.quantity;
    if (this.state.quantity > 0) {
      this.setState({
        quantity: (quantityIncrease - 1)
      });
    }
  }

  handleClickSelectMainImage(path) {
    this.setState({
      mainImage: path
    });
  }

  componentDidMount() {
    fetch(`api/products/${this.props.productId.productId}`)
      .then(res => res.json())
      .then(data => {
        const imageArray = data.image.split(',');
        this.setState({
          product: data,
          images: imageArray,
          mainImage: imageArray[0]
        });
      })
      .catch(err => console.error(err));
  }

  componentDidUpdate() {

  }

  render() {
    if (this.state.product === null) {
      return null;
    } else {
      return (
        <div className="container mt-3 mb-5">
          <div className="col-sm-5 pt-3 pl-3 spacing">
            <p className="pointer" onClick={ this.handleClickBackToCatalog }><i className="fas fa-chevron-circle-left"></i> Back to catalog</p>
          </div>
          <div className="d-flex justify-content-between">
            <div className="card d-flex w-60 mr-4 justify-content-around">
              <div className="detail-image-display-container d-flex">
                <img className="col-12 detail-image-display align-self-center" src={ this.state.mainImage } alt="" />
              </div>
              <div>
                <Carousel images={this.state.images} selectMainImage={this.handleClickSelectMainImage}/>
              </div>
            </div>
            <div className="card col-4 d-flex flex-wrap flex-column justify-content-center py-4 px-4">
              <h2>{ this.state.product.name }</h2>
              <h3 className="mt-3">{ this.convertPrice(this.state.product.price) }</h3>
              <p> {this.state.product.shortDescription}</p>
              <div className="mt-4">
                <Quantity
                  handleClickIncrease={this.handleClickQuantityIncrease}
                  handleClickDecrease={this.handleClickQuantityDecrease}
                  quantity={this.state.quantity} />
              </div>
              <button className="btn large-orange-button px-2 mt-4" onClick={ this.handleClickAddToCart }>Add to Cart</button>
              <div className="mt-5 d-flex justify-content-around">
                <div className="col-4 d-flex flex-wrap justify-content-center py-3">
                  <i className="fas fa-birthday-cake fa-2x mb-3 grey"></i>
                  <h3 className="col-12">{ this.state.product.ages }</h3>
                  <p>Ages</p>
                </div>
                <div className="col-4 d-flex flex-wrap justify-content-center py-3 border-left border-right">
                  <i className="fab fa-simplybuilt fa-2x mb-3 grey "></i>
                  <h3>{ this.state.product.pieces }</h3>
                  <p>Pieces</p>
                </div>
                <div className="col-4 d-flex flex-wrap justify-content-center py-3">
                  <i className="fas fa-hashtag fa-2x mb-3 grey"></i>
                  <h3>{ this.state.product.itemNum }</h3>
                  <p>Item#</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

}
