import React, { Component } from 'react'
import CardCart from '../components/CardCart';

export default class Cart extends Component {

    render() {
        const products = this.props.cart
        return (
                <div style={divContainer}>
                    <div style={divCard}>
                        {products.map(product => {
                            return <div style={divProduct} key={product._id}>
                                <CardCart {...product} handleDropFromCart={this.props.handleDropFromCart} user={this.props.user} />
                            </div>
                        })}
                    </div>
                    <div style={subTotal}>
                        SubTotal $ {products.reduce((acc, product) => {
                        return acc + product.price
                    }, 0)}
                    </div>
                </div>
        )
    }
}

const divContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'space-around',
    marginBottom:'130px',
    marginTop:'70px',
}

const divCard={
    marginBottom:'50px',
}

const divProduct = {
    maxHeight: '350px',
    marginBottom:'40px',
}

const subTotal = {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: '10px',
    width: '64%',
    margin: 'auto',
    fontSize: '2em',
    background: 'black',
    color: '#fff',
}
