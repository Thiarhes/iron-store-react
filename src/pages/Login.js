import React, { Component } from 'react'
import 'bulma/css/bulma.css';
import api from '../utils/api.utils';

export default class Login extends Component {
    state = {
        email: '',
        password: '',
        message: '',
    }

    handleInput = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
           await api.login(this.state);
           this.props.handleLogin(true);
           this.props.history.push('/');

        } catch (error) {
            this.setState({
                message: 'Email and password does not match with a registered user'
            })
        }
    }


    render() {
        return (
            <section className="hero is-white is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-4 is-offset-4">
                            <h3 className="title has-text-black">LOGIN</h3>
                            <hr className="login-hr" />
                            <p className="subtitle has-text-black">PLEASE LOGIN TO SEE OUR COOL STUFFS!</p>
                            <div className="box">
                                {this.state.message && <h2 style={errorStyle}>{this.state.message}</h2>}
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

const errorStyle = {
    color:'#FF0040',
    textTransform:'uppercase',
    fontWeight:'500',
    marginBottom:'10px',
}
