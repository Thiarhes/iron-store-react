import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export default class NavBar extends Component {
    render() {
        return (

            <nav style={navStyle}>
                <div style={divNavStyleA}>
                    <Link style={linkStyle} to='/'>
                        <span><h1 style={{ fontSize: '2em' }}>Iron Store</h1></span>
                    </Link>
                </div>
                <div style={divNavStyleB}>
                    <Link style={linkStyle} to='/signup'><Button name='Registrar' /></Link>
                    <Link style={linkStyle} to='/login'><Button name='Entrar' /></Link>
                </div>
            </nav>

        )
    }
}

const navStyle = {
    minWidth: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
}

const divNavStyleA = {
    marginLeft: '130px',
    color: 'white',
}

const divNavStyleB = {
    display: 'flex',
    minWidth: '320px',
    justifyContent: 'space-around',
    color: 'white',
    marginRight: '50px',
    fontSize: '1.2em'
}

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontWeight: '500',
}