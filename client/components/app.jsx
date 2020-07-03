import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';
import HeaderVideo from './header-video';
import Toast from './toast';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      view: {
        name: 'cart',
        params: {}
      },
      cart: [],
      hide: '',
      product: {},
      toast: 'display-none',
      cartQuantity: []
    };
    this.setView = this.setView.bind(this);
    this.display = this.display.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.handleCloseOpeningModal = this.handleCloseOpeningModal.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  setView(name, productId) {
    this.setState({
      view: {
        name: name,
        params: productId
      }
    });
  }

  handleCloseOpeningModal(event) {
    event.preventDefault();
    this.setState({
      fadeOut: 'fade-out'
    });
    setTimeout(() => {
      this.setState({
        showModal: 'display-none'
      });
    }
    , 1000);

  }

  display() {
    const view = this.state.view.name;
    if (view === 'details') {
      return <ProductDetails productId={this.state.view.params}
        setView={ this.setView }
        addToCart={ this.addToCart }/>;
    }
    if (view === 'catalog') {
      return (
        <div>
          <HeaderVideo fadeIn={this.state.fadeIn}/>
          <Toast product={this.state.product} display={this.state.toast}/>
          <ProductList addToCart={ this.addToCart }
            setView={this.setView}
            showModal={this.state.showModal}
            fadeOut={this.state.fadeOut}
            closeModal={this.handleCloseOpeningModal} />
        </div>

      );
    }
    if (view === 'cart') {
      return <CartSummary
        items={this.state.cartQuantity}
        setView={this.setView}
        deleteItem={this.deleteItem}
        getCartItems={this.getCartItems}
        cartItemQuantities={this.state.cartQuantity}
        addToCart={this.addToCart}/>;
    }
    if (view === 'checkout') {
      return <CheckoutForm
        items={this.state.cart}
        placeOrder={this.placeOrder}
        setView={this.setView}/>;
    }

  }

  getCartItems() {
    Promise.all([
      fetch('/api/cart')
        .then(res => res.json()),
      fetch('/api/cart/quantity')
        .then(res => res.json())
    ])
      .then(data => {
        this.setState({
          cart: data[0],
          cartQuantity: data[1]
        });
      })
      .catch(err => console.error(err));
  }

  addToCart(product, quantity) {
    this.setState({
      product: product,
      toast: 'toast-body-container col d-flex justify-content-center'
    });
    setTimeout(() => {
      this.setState({ toast: 'display-none' });
    }, 3000);

    const post = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    };
    for (let i = 0; i < quantity; i++) {
      fetch('/api/cart', post)
        .then(res => res.json())
        .then(newItem => {
          const currentCart = this.state.cart.slice();
          const newCart = currentCart.concat(newItem);
          this.setState({ cart: newCart });
        })
        .catch(err => console.error(err));
    }
  }

  placeOrder(details) {
    const post = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(details)
    };

    fetch('/api/orders', post)
      .then(() => this.setState({
        cart: [],
        view: { name: 'catalog', params: {} }
      }))
      .catch(err => console.error(err));
  }

  deleteItem(cartItemId) {
    const remove = {
      method: 'DELETE'
    };
    fetch(`api/cart/${cartItemId}`, remove)
      .then(res => res.json())
      .then(data => {
        const newCart = this.state.cart.slice();
        for (let i = 0; i < newCart.length; i++) {
          if (data[0].cartItemId === newCart[i].cartItemId) {
            newCart.splice(i, 1);
          }
        }
        this.setState({ cart: newCart });
      })
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.setState({ showModal: '' });
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
      <Header cartItemCount={this.state.cart.length} setView={this.setView}/>
      <div>
        { this.display() }
      </div>
    </div>

    );
  }
}
