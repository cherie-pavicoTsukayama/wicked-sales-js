import React from 'react';
import ProdcutListItem from './product-list-item';

export default class ProdcutList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  render() {
    return (
      <ProdcutListItem />
    );
  }
}
