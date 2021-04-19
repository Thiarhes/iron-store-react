import React, { Component } from 'react';
import NavBar from './components/NavBar';
import {Home} from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import { Switch, Route } from 'react-router-dom';

export default class App extends Component {
  state = {
    loggedInUser: false,
    token: '',
  }

  handleLogin = (value) => {
    this.setState({
      loggedInUser: value
    });
    if(value === false) {
      localStorage.removeItem("token");
      window.location = "/";
    }
  }

  componentDidMount = async () => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      this.setState({
        loggedInUser: true,
        token: storedToken
      })
    }
  }

  render() {
    return (
      <div>
        <NavBar loggedInUser={this.state.loggedInUser} handleLogin={this.handleLogin}/>
        <Switch>
          <Route exact path='/' render={(props) => <Home {...props} loggedInUser={this.state.loggedInUser} />} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' render={(props) => <Login {...props} handleLogin={this.handleLogin} />} />
          <Route path='/products' component={Product} />
          <Route path='/product/detail/:id' component={ProductDetail} />
        </Switch>
      </div>
    )
  }
}