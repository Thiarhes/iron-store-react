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
                    <img style={imgStyle} src={image} alt="Placeholder image" />
                </div>
                <div>
                    <p style={titleStyle}>{title}</p>
                    <Link to={`/product/detail/${_id}`}><span style={linkStyle}>DETAILS</span></Link>
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
    background: 'rgb(231,245,245)',
    background: 'linear-gradient(0deg, rgba(231,245,245,1) 0%, rgba(221,232,240,1) 61%, rgba(234,240,233,1) 100%, rgba(245,242,235,1) 100%)',
}

const imgStyle = {
    maxWidth: '600px',
    maxHeight: '450px',
}

const titleStyle = {
    textTransform: 'uppercase',
    fontWeight: '900',
    fontSize: '1.2em',
    marginBottom: '10px'
}

const linkStyle = {
    fontWeight: '600',
    color: '#fff',
    background: '#AEB6BF',
    padding: '3px',
    borderRadius: '5px',
}