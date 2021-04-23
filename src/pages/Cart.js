import React, { Component } from 'react'
import api from '../utils/api.utils';

export default class Cart extends Component {
    state = {
        products: []
    }

    componentDidMount = async () => {
        const userId = this.props.user.id;
        console.log(userId)
        if (userId) {
            const response = await api.getCart(userId);
            console.log(response)
            // const product = response.filter(item => {
                // return item.id === userId
            // })
            // this.setState({
                // products:[product]
            // })
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
