import React, { Component } from 'react'
import 'bulma/css/bulma.css';
import api from '../utils/api.utils';
import Card from '../components/Card';
import { InputSearch } from '../components/InputSearch';

export default class Product extends Component {
    state = {
        products: [],
        searchValue: '',
    }

    componentDidMount = async () => {
        const products = await api.getAllProducts();
        this.setState({
            products: products
        })
    }

    handleInput = (e) => {
        const { value } = e.target;
        this.setState({ searchValue: value })
    }


    render() {
        const { products, searchValue } = this.state;
        const filteredProducts = !!searchValue ?
            products.filter(product => {
                return product.title
                    .toLowerCase()
                    .includes(
                        searchValue.toLowerCase()
                    );
            })
            : products;

        return (
            <div>
                <div style={divInput}>
                    <InputSearch
                        searchValue={searchValue}
                        handleInput={this.handleInput} 
                    />
                </div>
                {filteredProducts.length > 0 && (
                    filteredProducts.map(product => {
                        return <Card key={product._id}{...product} />
                    })
                )}
                {filteredProducts.length === 0 && (
                    <p>Sorry, Product not found!</p>
                )}
            </div>
        )
    }
}

const divInput = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
    height: '30px',
}












