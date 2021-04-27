import React, { Component } from 'react'
import CardCart from '../components/CardCart';
import api from '../utils/api.utils';

export default class Cart extends Component {

    handleClick = async () => {
        try {
            await api.emptyCart({ userId: this.props.user.id })
            this.props.handleDropFromCart();
        } catch (error) {
            console.error(error);
        }
    }

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
                {products.length > 0 && (
                    <>
                        <div style={emptyButton}>
                            <button
                                onClick={() => this.handleClick(this.props)}
                                style={emptyCart}>
                                EMPTY CART
                       </button>
                        </div>
                        <div style={subTotal}>
                            SubTotal $ {products.reduce((acc, product) => {
                            return acc + product.price
                        }, 0)}
                        </div>
                    </>
                )}
                {products.length <= 0 && (
                    <div style={divMessage}>
                        <h2>
                            <strong>
                                You don't have any product yet.<br />
                          To add products to your cart, please,
                          go to our amazing list and choose how many products you wish! ;)
                            </strong>
                        </h2>
                    </div>
                )}
            </div>
        )
    }
}

const divContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginBottom: '130px',
    marginTop: '70px',
}

const divCard = {
    marginBottom: '50px',
}

const divProduct = {
    maxHeight: '350px',
    marginBottom: '40px',
}

const emptyButton = {
    display: 'flex',
    margin: '0 auto',
    padding: '25px',
}

const emptyCart = {
    padding: '5px',
    color:'#fff',
    fontSize:'1em',
    fontWeight: '500',
    border: '0.5px solid #dbd5d5',
    background:'#625e5e',
    borderRadius:'5px',
    cursor:'pointer',
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

const divMessage = {
    display: 'flex',
    textAlign: 'center',
    margin: '0 auto',
    fontSize: '2.2em',
    textTransform: 'uppercase',
    maxWidth: '40ch',
    background: '-webkit-linear-gradient( grey, #6b666b)',
    webkitBackgroundClip: 'text',
    webkitTextFillColor: 'transparent',
    textShadow: '1.5px 0.5px rgba(128, 128, 128, 0.5)',
}
