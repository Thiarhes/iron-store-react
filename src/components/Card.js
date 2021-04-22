import React, { Component } from 'react'
import 'bulma/css/bulma.css';
import { Link } from 'react-router-dom';
import api from '../utils/api.utils';

export default class Card extends Component {
    state = {
        cart: '',
    }

    handleClick = async () => {
        try {
            await api.addToCart(this.props)
            this.setState({
                cart: [...this.props]
            })
        } catch (error) {
            
        }
    }

    render() {
        const { title, image, price, _id } = this.props;
        return (
            <div className="card" style={divCard}>
                <div className="card-image" >
                    <Link to={`/product/detail/${_id}`}>
                        <img style={imgStyle} src={image} alt="Some Product" />
                    </Link>
                </div>
                <div style={divDetails}>
                    <p style={titleStyle}>{title}</p>
                    <span style={priceStyle}>$ {price}</span>
                    <Link to={`/product/detail/${_id}`}><span style={linkStyle}>DETAILS</span></Link>
                    <button
                        onClick={() => this.handleClick(this.props)}
                        style={cartButton}>ADD TO CART</button>
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
    minHeight: '80vh',
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
    maxHeight: '350px',
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

const linkStyle = {
    fontSize: '1.1em',
    fontWeight: '600',
    color: '#fff',
    background: '#AEB6BF',
    padding: '3px',
    borderRadius: '5px',
}

const cartButton = {
    margin: '0 auto',
    fontSize: '1.1em',
    fontWeight: '600',
    color: '#fff',
    background: '#393634',
    padding: '3px',
    borderRadius: '5px',
}