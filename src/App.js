import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { Switch, Route } from 'react-router-dom';

export default class App extends Component {
  state = {
    loggedInUser: false,
  }

  handleLogin = (value) => {
    this.setState({
      loggedInUser: value
    })
  }

  render() {
    return (
      <div>
        <NavBar loggedInUser={this.state.loggedInUser}/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' render = { (props) => <Login {...props} handleLogin={this.handleLogin} />} />
        </Switch>
      </div>
    )
  }
}