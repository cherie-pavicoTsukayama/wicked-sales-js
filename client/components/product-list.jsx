import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      hide: ''
    };
    this.createProductCards = this.createProductCards.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCloseOpeningModal = this.handleCloseOpeningModal.bind(this);
  }

  getProducts() {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => this.setState({ products: data }))
      .catch(err => console.error(err));
  }

  createProductCards() {
    const itemCard = this.state.products.map(item => {
      return <ProductListItem key={item.productId} product={item} onClick={this.handleClick}/>;
    });
    return itemCard;
  }

  handleClick(event) {
    this.props.setView('details', { productId: parseInt(event.target.id) });
  }

  handleCloseOpeningModal(event) {
    event.preventDefault();
    this.setState({
      hide: 'display-none'
    });
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <div className="container d-flex flex-wrap justify-content-between mt-5 mb-5 ">
        <div className={`${this.state.hide}`}>
          <div className='opening-modal d-flex justify-content-center align-items-center'>
            <div className="modal-dialog">
              <div className="modal-content">
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
                <div className="row justify-content-center mb-4">
                  <form action="submit" onSubmit={this.handleCloseOpeningModal}>
                    <input required className="" type="checkbox" id="acknowledge" name="scales" />
                    <label className="m-0 ml-2" htmlFor="scales">I acknowledge that this is strictly a demo application</label>
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
