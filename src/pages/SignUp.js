import React, { Component } from 'react'
import 'bulma/css/bulma.css';
import api from '../utils/api.utils'

export default class SignUp extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
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
            const { username, email, password, confirmPassword } = this.state;
            if (password !== confirmPassword) {
                this.setState({
                    message: 'Password and confirmation does not match!'
                });
                return;
            }  
                this.setState({
                    username: '',
                    email:'',
                    password: '',
                    confirmPassword: '',
                    errorMessage: '',
                });
                await api.signup({
                    username,
                    email,
                    password,
                });
                this.props.history.push('/login');
            
        } catch (error) {
            this.setState({
                message: error.response.data
            })
        }
    }

    render() {
        return (
            <section className="hero is-white is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-4 is-offset-4">
                            <h3 className="title has-text-black">REGISTER</h3>
                            <hr className="login-hr" />
                            <p className="subtitle has-text-black">WELCOME TO IRON STORE!</p>
                            <div className="box">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="field">
                                        <div className="field">
                                            <div className="control">
                                                <input
                                                    name='username'
                                                    required
                                                    value={this.state.username}
                                                    onChange={this.handleInput}
                                                    className="input is-large"
                                                    type="text"
                                                    placeholder="Username"
                                                    autofocus="" />
                                            </div>
                                        </div>
                                        <div className="control">
                                            <input
                                                name='email'
                                                required
                                                value={this.state.email}
                                                onChange={this.handleInput}
                                                className="input is-large"
                                                type="email"
                                                placeholder="Email"
                                                autofocus="" />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <div className="control">
                                            <input
                                                name='password'
                                                required
                                                value={this.state.password}
                                                onChange={this.handleInput}
                                                className="input is-large"
                                                type="password"
                                                placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <input
                                                name='confirmPassword'
                                                required
                                                value={this.state.confirmPassword}
                                                onChange={this.handleInput}
                                                className="input is-large"
                                                type="password"
                                                placeholder="Confirm Password" />
                                        </div>
                                    </div>
                                    <button
                                        type='submit'
                                        className="button is-block is-success is-large is-fullwidth">
                                        REGISTER
                                    <i className="fa fa-sign-in" aria-hidden="true"></i>
                                    </button>
                                </form>
                                {this.state.message && (
                                    <div style={styleError}>{this.state.message}</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const styleError = {
    border: "1px solid red",
    color: "red",
    textAlign: "center",
    padding: "10px",
    borderRadius: "3px",
    width: "100%",
}
