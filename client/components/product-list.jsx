import React from 'react';
import ProductListItem from './product-list-item';
export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.createProductCards = this.createProductCards.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getProducts() {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => this.setState({ products: data }))
      .catch(err => console.error(err));
  }

  createProductCards() {
    const itemCard = this.state.products.map(item => {
      return <ProductListItem key={item.productId} product={item} onClick={this.handleClick} addToCart={this.props.addToCart} productId={item.productId}/>;
    });
    return itemCard;
  }

  handleClick(event) {
    this.props.setView('details', { productId: parseInt(event.target.id) });
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <div id="productList" className="container d-flex flex-wrap justify-content-between mt-5 mb-5 fade-in">
        <div className={`${this.props.showModal} `}>
          <div className={`opening-modal d-flex justify-content-center align-items-center ${this.props.fadeOut} `}>
            <div className="modal-dialog fade-in">
              <div className="modal-content slide-in">
                <div className="modal-header header d-flex justify-content-center">
                  <h4 className="text-center m-0 p-0" >Welcome to Technicali!</h4>
                </div>
                <div className="modal-body ">
                  <p className="px-3">
                    Please note that this website is a content management application
                    created for the purpose of demonstration. Check the box below to
                    acknowledge that the merchandise shown here is not available for
                    purchase, that you will not provide genuine financial or personal
                    information, and that you are aware no purchase will truly be
                    processed.
                  </p>
                </div>
                <div className="d-flex justify-content-center mb-4">
                  <form action="submit" onSubmit={this.props.closeModal}>
                    <div className="d-flex container">

                      <label className="m-0 ml-2" htmlFor="agreed"><input required className="mr-2" type="checkbox" id="acknowledge" name="agreed" />I acknowledge that this is strictly a demo application</label>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button type="submit" className="btn btn-primary mt-3" >Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        { this.createProductCards() }
      </div>
    );
  }
}
