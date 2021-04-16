import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    state = {
        toggleMenu: '',
    }

    toggleMenu = () => {
        if (this.state.toggleMenu === '') {
            this.setState({
                toggleMenu: 'is-active',
            })
        } else {
            this.setState({
                toggleMenu: '',
            })
        }
    }

    render() {
        const { loggedInUser, handleLogin } = this.props;
        return (
            <nav className="navbar has-background-grey" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to='/' style={linkStyle}>
                        <span>Iron Store</span>
                    </Link>
                    <div onClick={this.toggleMenu} role="button" className={`navbar-burger ${this.state.toggleMenu}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </div>
                </div>

                <div id="navbarBasicExample" className={`navbar-menu ${this.state.toggleMenu}`}>
                    <div className="navbar-start">

                    </div>
                    <div className="navbar-item has-dropdown is-hoverable"></div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            {loggedInUser ?
                                <div className="buttons" style={buttonStyle}>
                                    <Link to='/products' className="button is-black">
                                        <strong>PRODUCTS</strong>
                                    </Link>
                                    <Link 
                                    onClick={() => handleLogin(false)}
                                    to='/' 
                                    className="button is-success" >
                                        <strong>LOGOUT</strong>
                                    </Link>
                                </div>
                                :
                                <div className="buttons" style={buttonStyle}>
                                    <Link to='/signup' className="button is-black">
                                        <strong>SIGNUP</strong>
                                    </Link>
                                    <Link to='/login' className="button is-success" >
                                        <strong>LOGIN</strong>
                                    </Link>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

const linkStyle = {
    color: '#848484',
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: '2.2rem',
    marginLeft: '140px',
    border: '1px solid #F8F9F9',
    borderRadius: '25%',
    background: '#fff'
}

const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
}