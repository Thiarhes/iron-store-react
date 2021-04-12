import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { Switch, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={SignUp} />
          <Route path='/' component={Login} />
        </Switch>
      </div>
    )
  }
}