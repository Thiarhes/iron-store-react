import React, { Component } from 'react'

export default class DisabledButton extends Component {
    render() {
        const { text, onClick } = this.props;
        return (
            <button 
            style={buttonStyle} 
            onClick={onClick} 
            disabled
            >
                {text}
            </button>
        )
    }
}

const buttonStyle = {
    width:'20%',
    background:'#34495E',
    color:'#fff',
    border:'none',
    padding:'15px 30px',
    cursor:'not-allowed',
    borderRadius:'3px',
    fontSize:'1.1rem',
    fontWeight:'600'
}
