import React, { Component } from 'react'
import 'bulma/css/bulma.css';
import api from '../utils/api.utils';

export default class CardCart extends Component {
    
    handleClick = async () => {
        try {
            await api.removeOneProduct({ productId: this.props._id, userId: this.props.user.id })
            this.props.handleDropFromCart();
        } catch (error) {
            console.error(error);
        }
    }
    
    render() {
        const { title, image, price } = this.props;
        return (
            <div className="card" style={divCard}>
                <div className="card-image" >
                        <img style={imgStyle} src={image} alt="Some Product" />
                </div>
                <div style={divDetails}>
                    <p style={titleStyle}>{title}</p>
                    <span style={priceStyle}>$ {price}</span>
                    <button
                        onClick={() => this.handleClick(this.props)}
                        style={cartButton}>REMOVE</button>
                </div>
            </div>
        )
    }
}

const divCard = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'space-around',
    margin: '0 auto',
    minHeight: '30vh',
    maxWidth: '960px',
    marginTop: '10px',
    backgroundColor: 'rgb(231,245,245)',
    background: 'linear-gradient(0deg, rgba(231,245,245,1) 0%, rgba(221,232,240,1) 61%, rgba(234,240,233,1) 100%, rgba(245,242,235,1) 100%)',
}

const divDetails = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    minHeight: '200px',
}

const imgStyle = {
    maxWidth: '320px',
    maxHeight: '80px',
}

const titleStyle = {
    textTransform: 'uppercase',
    fontWeight: '900',
    fontSize: '1.2em',
    marginBottom: '10px'
}

const priceStyle = {
    fontWeight: '600',
    fontSize: '1.2em',
}

const cartButton = {
    fontSize: '1.1em',
    fontWeight: '600',
    color: '#fff',
    background: '#393634',
    padding: '3px',
    borderRadius: '5px',
}