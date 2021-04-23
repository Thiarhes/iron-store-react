import React, { Component } from 'react'
import api from '../utils/api.utils';

export default class Cart extends Component {
    state = {
        products: []
    }

    componentDidMount = async () => {
        const userId = this.props.user.id;
        
        if (userId) {
            const response = await api.getCart(userId);
            this.setState({
                products: response.products
            })
        }
    }


    render() {
        return (
            <div style={divContainer}>
                <h1>Ola cart</h1>
            </div>
        )
    }
}

const divContainer = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '100px',
}
