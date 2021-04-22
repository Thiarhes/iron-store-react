import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        const { text, onClick } = this.props;
        return (
            <button 
            style={buttonStyle} 
            onClick={onClick} 
            >
                {text}
            </button>
        )
    }
}

const buttonStyle = {
    display:'inline-block',
    background:'#485FF6 ',
    color:'#fff',
    border:'none',
    padding:'15px 30px',
    cursor:'pointer',
    borderRadius:'3px',
    fontSize:'1.1rem',
    fontWeight:'600'
}
