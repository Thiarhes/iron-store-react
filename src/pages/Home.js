import React from 'react'

export const Home = () => {
    return (
        <div>
             <p style={pStyle}>The best place where you can find a console game. Enter and welcome!</p>
             <img style={imgStyle} src='./assets/images/consoles3.png' alt='consoles img'/>
        </div>
    )
}


const imgStyle = {
    width: '100%'
}

const pStyle = {
    background: '#F2F2F2',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: '700',
    border: '20px solid white',
}
