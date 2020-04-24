import React from 'react';
import Header from './header';
import ProductItem from './product-list-item';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    return (this.state.isLoading
      ? <h1>Testing connections...</h1>
      : <h1>{this.state.message}</h1>,
    <div>
      { Header() }
      <div>
        { ProductItem() }
      </div>
    </div>

    );
  }
}