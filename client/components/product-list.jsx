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
      return <ProductListItem key={item.productId} product={item} onClick={this.handleClick}/>;
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
      <div className="container d-flex flex-wrap justify-content-between mt-5 mb-5 ">
        { this.createProductCards() }
      </div>

    );
  }
}
