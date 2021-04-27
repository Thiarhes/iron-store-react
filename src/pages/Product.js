import React, { Component } from 'react'
import 'bulma/css/bulma.css';
import api from '../utils/api.utils';
import Card from '../components/Card';
import { InputSearch } from '../components/InputSearch';
import Button from '../components/Button';
import DisabledButton from '../components/Disabledbutton';

export default class Product extends Component {
    state = {
        products: [],
        allProducts: [],
        searchValue: '',
        page: 0,
        productsPerPage: 3
    }

    componentDidMount = async () => {
        const { page, productsPerPage } = this.state;
        const products = await api.getAllProducts();
        this.setState({
            products: products.slice(page, productsPerPage),
            allProducts: products
        })
    }

    loadMoreProducts = () => {
        const { products, allProducts, page, productsPerPage } = this.state;
        const nextPage = page + productsPerPage;
        const nextProducts = allProducts.slice(nextPage, nextPage + productsPerPage);
        products.push(...nextProducts);

        this.setState({ products, page: nextPage })
    }

    handleInput = (e) => {
        const { value } = e.target;
        this.setState({ searchValue: value })
    }


    render() {
        const { products, searchValue, page, productsPerPage, allProducts } = this.state;
        const filteredProducts = !!searchValue ?
            allProducts.filter(product => {
                return product.title
                    .toLowerCase()
                    .includes(
                        searchValue.toLowerCase()
                    );
            })
            : products;

        const noMoreProducts = page + productsPerPage >= allProducts.length;

        return (
            <div >
                <div style={divInput}>
                    <InputSearch
                        searchValue={searchValue}
                        handleInput={this.handleInput}
                    />
                </div>
                {filteredProducts.length > 0 && (
                    filteredProducts.map(product => {
                        return <Card key={product._id}{...product} handleUpdateCart={this.props.handleUpdateCart} user={this.props.user}/>
                    })
                )}
                {filteredProducts.length === 0 && (
                    <div style={pStyle}>
                        <p>Sorry, Product not found!</p>
                    </div>
                )}
                <div style={buttonStyle}>
                    {!noMoreProducts && (
                        <Button
                            text='See More Products'
                            onClick={this.loadMoreProducts}
                        />
                    )}
                    {!!noMoreProducts && (
                        <DisabledButton
                            text='No More Products to see'
                            onClick={this.loadMoreProducts}
                        />
                    )}
                </div>
            </div>
        )
    }
}

const divInput = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '65px',
    height: '30px',
    marginBottom: '25px'
}

const pStyle ={
    display:'flex',
    justifyContent:'center',
    color:'#FF0040',
    fontWeight:'600',
    textTransform:'uppercase',
}

const buttonStyle = {
    display: 'flex',
    alignItems: 'flex-end',
    minHeight: '80px',
    justifyContent: 'center',
    marginBottom: '30px',
}












