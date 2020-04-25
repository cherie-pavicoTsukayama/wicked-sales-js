import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.display = this.display.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  setView(name, productId) {
    this.setState({
      view: {
        name: name,
        params: productId
      }
    });
  }

  display() {
    if (this.state.view.name === 'details') {
      return <ProductDetails productId={this.state.view.params} setView={ this.setView } addToCart={ this.addToCart }/>;
    } else {
      return <ProductList setView={this.setView} />;
    }
  }

  getCartItems() {
    fetch('/api/cart')
      .then(res => res.json())
      .then(data => this.setState({ cart: data }))
      .catch(err => console.error(err));
  }

  addToCart(product) {
    const post = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    };

    fetch('/api/cart', post)
      .then(res => res.json())
      .then(newItem => {
        const currentCart = this.state.cart.slice();
        const newCart = currentCart.concat(newItem);
        this.setState({ cart: newCart });
      })
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getCartItems();
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
      <Header cartItemCount={this.state.cart.length}/>
      <div>
        { this.display() }
      </div>
    </div>

    );
  }
}
