import React, { Component } from 'react'
import 'bulma/css/bulma.css';
import api from '../utils/api.utils';
import Card from '../components/Card';

export default class Product extends Component {
    state = {
        products: [],
    }

    componentDidMount = async () => {
        const products = await api.getAllProducts();
        this.setState({
            products: products
        })
    }


    render() {
        const { products } = this.state;
        return (
            <div>
                {products.map(product => {
                    return <Card  key={product._id}{...product} />
                })}
            </div>
        )
    }
}













