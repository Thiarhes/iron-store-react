import React, { Component } from 'react'
import 'bulma/css/bulma.css';

export default class SignUp extends Component {
    render() {
        return ( 
                <div className="columns is-tablet">
      <div className="column is-one-quarter "></div>
      <div className="column custom-color">
        <div className="field">
          <label className="label">Username</label>
          <div className="control ">
            <input className="input " type="text" placeholder="Username"/>
            <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control ">
            <input className="input " type="email" placeholder="Email"/>
            <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
            <i className="fas fa-exclamation-triangle"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control ">
            <input className="input " type="password" placeholder="Password"/>
            <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
            <i className="fas fa-exclamation-triangle"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Confirm Password</label>
          <div className="control ">
            <input className="input " type="password" placeholder="Confirm Password"/>
            <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
            <i className="fas fa-exclamation-triangle"></i>
            </span>
          </div>
        </div>
        {/* <div className="field"> */}
          {/* <label className="label">Number</label> */}
          {/* <div className="control "> */}
            {/* <input className="input " type="number" placeholder="Number"/> */}
            {/* <span className="icon is-small is-left"> */}
            {/* <i className="fas fa-user"></i> */}
            {/* </span> */}
            {/* <span className="icon is-small is-right"> */}
            {/* <i className="fas fa-check"></i> */}
            {/* </span> */}
          {/* </div> */}
        {/* </div> */}
        {/* <div className="field"> */}
          {/* <label className="label">Gender</label> */}
          {/* <div className="control"> */}
            {/* <label className="radio"> */}
            {/* <input type="radio" name="answer"/> */}
            {/* Male */}
            {/* </label> */}
            {/* <label className="radio"> */}
            {/* <input type="radio" name="answer"/> */}
            {/* Female */}
            {/* </label> */}
          {/* </div> */}
        {/* </div> */}
        <div className="field pt-3">
          <div className="control">
            <label className="checkbox">
            <input type="checkbox"/>
            I agree to the <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>
        <div className="field is-grouped pt-5">
          <div className="control">
            <button className="button submit">Register</button>
          </div>
        </div>
      </div>
      <div className="column is-one-quarter"></div>
    </div>
        )
    }
}
