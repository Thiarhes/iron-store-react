import React, { Component } from 'react'
import CardCart from '../components/CardCart';

export default class Cart extends Component {
    state = {
        products: this.props.cart
    }

    render() {
        const { products } = this.state
        return (
            <div style={divContainer}>
                {products.map(product => {
                    return <div style={divProduct}>
                        <CardCart key={product._id}{...product} handleDropFromCart={this.props.handleDropFromCart} user={this.props.user} />
                    </div>
                })}
            </div>
        )
    }
}

const divContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}

const divProduct = {
    margin: '150px 25px',
    maxHeight: '150px',
}
