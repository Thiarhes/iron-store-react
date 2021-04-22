import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import api from '../utils/api.utils';

export default class ProductDetail extends Component {
  state = {

  }

  componentDidMount = async () => {
    const product = await api.getOneProduct(this.props.match.params.id);
    this.setState({ ...product })
  }

  render() {
    const { title, description, image, category } = this.state;
    return (
      <div className="card" style={divCard}>
        <div className="card-image" style={cardImg}>
          <img style={imgStyle} src={image} alt="Some Product " />
        </div>
        <div className="card-content" style={cardContent}>
          <div className="media">
            <div className="media-content">
              <p className="title is-4" style={titleStyle}>{title}</p>
              <p className="subtitle is-6" style={categoryStyle}>{category}</p>
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
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '50px',
  minHeight:'100vh',
  flexWrap:'wrap',
  backgroundColor: 'rgb(134,199,200)',
  background: 'linear-gradient(0deg, rgba(192,244,245,1) 0%, rgba(240,234,233,1) 61%, rgba(234,240,233,1) 100%, rgba(245,242,235,1) 100%)',
}

const imgStyle = {
  maxWidth: '250px',
  minHeight:'150px',
}

const cardImg = {
  display: 'flex',
  alignItems: 'center',
  minWidth: '250px',
}

const titleStyle = {
  fontSize: '1.6em',
  fontWeight: '900',
  textTransform:'uppercase',
  maxWidth:'15ch'
}

const categoryStyle = {
  textTransform: 'uppercase',
  fontWeight: '500',
}

const content = {
  maxWidth: '300px',
}

const cardContent = {
  display: 'flex',
  flexDirection:'column',
  justifyContent:'center',
  marginTop: '25px',
}