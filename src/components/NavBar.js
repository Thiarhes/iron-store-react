import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
                <nav className="navbar has-background-grey-light" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                    <Link to='/' style={linkStyle}>
                     <span>Iron Store</span>
                    </Link>
                        
                    </div>

                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-start">
                            
                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <Link to='/signup' className="button is-black">
                                        <strong>SIGNUP</strong>
                                    </Link>
                                    <Link to='/login' className="button is-success" >
                                        <strong>LOGIN</strong>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
        )
    }
}

const linkStyle = {
    color: '#2E2E2E',
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize:'2.2rem',
    marginLeft:'120px',
}