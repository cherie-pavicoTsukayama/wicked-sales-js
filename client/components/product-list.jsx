import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  getProducts() {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => this.setState({ products: data }))
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <ProductListItem />
    );
  }
}
