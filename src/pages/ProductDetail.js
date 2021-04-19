import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import api from '../utils/api.utils';

export default class ProductDetail extends Component {
  state = {
    
  }

  componentDidMount = async () => {
    const product = await api.getOneProduct(this.props.match.params.id);
    this.setState({...product})
}

  render() {
    const { title, price, description, image, category } = this.state;
    return (
      <div className="card" style={divCard}>
        <div className="card-image" style={cardImg}>
            <img style={imgStyle} src={image} alt="Placeholder image"/>
        </div>
        <div className="card-content" style={cardContent}>
          <div className="media">
            <div className="media-content">
              <p className="title is-4" style={titleStyle}>{title}</p>
              <p className="subtitle is-6" style={categoryStyle}>{category}</p>
              <span style={priceStyle}>$ {price}</span>
            </div>
          </div>

          <div className="content" style={content}>
            {description} 
          </div>
        </div>
      </div>
    )
  }

}

const divCard = {
  display:'flex',
  minHeight:'90vh',
  justifyContent:'space-around',
  marginTop:'10px',
  background: 'rgb(134,199,200)',
  background: 'linear-gradient(0deg, rgba(192,244,245,1) 0%, rgba(240,234,233,1) 61%, rgba(234,240,233,1) 100%, rgba(245,242,235,1) 100%)',
}

const imgStyle = {
  minWidth:'150px'
}

const cardImg = {
  minWidth:'250px',
}

const titleStyle = {
  fontSize:'2.2em',
  fontWeight:'900',
}

const categoryStyle ={
  textTransform:'uppercase',
  fontWeight:'500',
}

const priceStyle = {
  fontWeight:'600',
  fontSize:'1.2em',
}
 
const content = {
  maxWidth:'300px',
}

const cardContent = {
  marginTop:'25px',
}