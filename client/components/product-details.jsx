import React from 'react';
import Quantity from './quantity-control';
import Carousel from './carousel';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        longDescription: 'Get ready for a colossal LEGO® build and play experience with the 4,108-piece LEGO Technic™ Liebherr R 9800 Excavator. Developed in partnership with Liebherr, this replica model is operated via the intuitive LEGO TECHNIC CONTROL+ app and powered by 2 advanced Smart Hubs with 7 motors. The sophisticated app technology enables super-precise movement and amazing functionality, while delivering endless authentic digital play combinations via 4 different control screens with cool graphics. The Multi-...',
        name: 'Liebherr R-9800 Excavator',
        price: 49999,
        productId: 4,
        shortDescription: 'This excavator model features the LEGO® TECHNIC™ CONTROL+ app for a more immersive and realistic play experience and hours of fun.',
        ages: '11+',
        pieces: 958,
        itemNum: 42099
      },
      images: ['/images/Lego-Liebherr-R-9800-Excavator.jpeg', '/images/Lego-Liebherr-R-9800-Excavator-1.jpeg', '/images/Lego-Li ebherr-R-9800-Excavator-2.jpeg', '/images/Lego-Liebherr-R-9800-Excavator-3.jpeg', '/images/Lego-Liebherr-R-9800-Excavator-4.jpeg', '/images/Lego-Liebherr-R-9800-Excavator-5.jpeg'],
      quantity: 1
    };
    this.handleClickBackToCatalog = this.handleClickBackToCatalog.bind(this);
    this.handleClickAddToCart = this.handleClickAddToCart.bind(this);
    this.handleClickQuantityIncrease = this.handleClickQuantityIncrease.bind(this);
    this.handleClickQuantityDecrease = this.handleClickQuantityDecrease.bind(this);
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

  // componentDidMount() {
  //   fetch(`api/products/${this.props.productId.productId}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       // const imageArray = data.image.split(',');
  //       this.setState({
  //         product: data
  //         // images: imageArray
  //       });
  //     })
  //     .catch(err => console.error(err));
  // }

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
            <div className="card d-flex flex-nowrap w-60 mr-4 justify-content-center align-content-center">
              <div>
                <img className="col-12 detail-image-display" src={this.state.images[0]} alt="" />
              </div>
              <div>
                <Carousel />
              </div>
            </div>
            <div className="card col-4 d-flex flex-wrap flex-column justify-content-center py-4 px-5">
              <h2>{ this.state.product.name }</h2>
              <h3 className="mt-3">{ this.convertPrice(this.state.product.price) }</h3>
              <p> {this.state.product.shortDescription}</p>
              <Quantity
                handleClickIncrease={ this.handleClickQuantityIncrease }
                handleClickDecrease={ this.handleClickQuantityDecrease }
                quantity={ this.state.quantity }/>
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
