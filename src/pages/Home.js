import React from 'react'

export const Home = ( props ) => {
    return (
        <div>
            {props.loggedInUser ?
              <> 
                <p style={pStyle}>Choose your favorite game console and accessories. Check out our amazing list!</p>
                <img style={imgLoggedStyle} src='./assets/images/consoles3.png' alt='consoles img' />
                </>
                : 
                <>
                <p style={pStyle}>The best place where you can find a game console. Enter and welcome!</p>
                <img style={imgStyle} src='./assets/images/consoles3.png' alt='consoles img'/>
              </>
            }
        </div>
    )
}


const imgStyle = {
    width: '100%'
}

const imgLoggedStyle = {
    width:'100%',
    marginTop:'10px'
}

const pStyle = {
    background: '#F2F2F2',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: '1.8rem',
    fontWeight: '700',
    border: '20px solid white',
}