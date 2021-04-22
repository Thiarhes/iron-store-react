import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        return (
            <div style={divContainer}>
                <h1>Ola cart</h1>
            </div>
        )
    }
}

const divContainer = {
    display:'flex',
    justifyContent:'center',
    marginTop:'100px',
}
