import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { Home } from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import api from './utils/api.utils';
import { Switch, Route } from 'react-router-dom';

export default class App extends Component {
  state = {
    loggedInUser: false,
    token: '',
    user: {},
    cart: []
  }

  handleLogin = (value) => {
    this.setState({
      loggedInUser: value
    });
    if (value === false) {
      localStorage.removeItem("token");
      window.location = "/";
    }
  }

  updateCart = async (id = this.state.user.id) => {
    const response = await api.getCart(id);
    this.setState({
      cart: response.products
    })
  }

  handleSetUser = (user) => {
    this.updateCart(user.id)
    this.setState({
      user: user,
    })
  }

  componentDidMount = async () => {
    this.updateCart();
    const storedToken = localStorage.getItem('token', 'user');

    if (storedToken) {
      this.setState({
        loggedInUser: true,
        token: storedToken,
        
      })
    }
  }

  render() {
    return (
      <div>
        <NavBar
          loggedInUser={this.state.loggedInUser}
          handleLogin={this.handleLogin}
          cartLength={this.state.cart.length}
        />
        <Switch>
          <Route exact path='/' render={(props) => <Home {...props} loggedInUser={this.state.loggedInUser} />} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login'
            render={(props) => <Login {...props}
              handleLogin={this.handleLogin}
              setUser={this.handleSetUser} />}
          />
          <Route path='/products' render={(props) => <Product {...props} user={this.state.user} handleUpdateCart={this.updateCart} />} />
          <Route path='/product/detail/:id' component={ProductDetail} />
          <Route path='/cart' render={(props) => <Cart {...props} user={this.state.user} handleDropFromCart={this.updateCart} cart={this.state.cart} />} />
        </Switch>
      </div>
    )
  }
}
