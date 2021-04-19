import React, { Component } from 'react'
import 'bulma/css/bulma.css';
import { Link } from 'react-router-dom';

export default class Card extends Component {
    render() {
        console.log(this.props)
        const { title, image, _id } = this.props;
        return (
            <div className="card" style={divCard}>
                <div className="card-image">
                    <img src={image} alt="console game" />
                    <p style={titleStyle}>{title}</p>
                    <Link to={`/product/detail/${_id}`}><span style={linkStyle}>DETAILS</span></Link>
                </div>
            </div>
        )
    }
}

const divCard = {
    display:'flex',
    flexDirection:'column',
    textAlign:'center',
    margin:'0 auto',
    minHeight:'70vh',
    maxWidth:'960px',
    marginTop:'10px',
}

const titleStyle = {
    textTransform:'uppercase',
    fontWeight:'600',
    fontSize:'1.4em',
    marginBottom:'5px'
}

const linkStyle = {
    fontWeight:'600',
    color:'#fff',
    background:'#AEB6BF',
    padding:'3px', 
    borderRadius:'5px',   
}