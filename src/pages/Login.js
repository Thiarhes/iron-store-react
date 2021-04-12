import React, { Component } from 'react'
import 'bulma/css/bulma.css';

export default class Login extends Component {
    state = {
        email: '',
        password: '',
    }

    handleInput = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }


    render() {
        return (
            <section className="hero is-white is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-4 is-offset-4">
                            <h3 className="title has-text-black">LOGIN</h3>
                            <hr className="login-hr" />
                            <p className="subtitle has-text-black">Please login to see our cool stuffs!</p>
                            <div className="box">
                                <form>
                                    <div className="field">
                                        <div className="control">
                                            <input
                                            name='email'
                                            value={this.state.email}
                                            onChange={this.handleInput} 
                                            className="input is-large" 
                                            type="email" 
                                            placeholder="Your Email" 
                                            autofocus="" />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <div className="control">
                                            <input 
                                            name='password'
                                            value={this.state.password}
                                            onChange={this.handleInput}
                                            className="input is-large" 
                                            type="password" 
                                            placeholder="Your Password" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="checkbox">
                                            <input type="checkbox" />
                                      Remember me
                                   </label>
                                    </div>
                                    <button
                                    type='submit'
                                    onClick={this.handleSubmit} 
                                    className="button is-block is-success is-large is-fullwidth">
                                        LOGIN 
                                    <i className="fa fa-sign-in" aria-hidden="true"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
