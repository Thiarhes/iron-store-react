import React from 'react'

export const Button = (props) => {
    return (
        <div style={{backgroundColor:props.color}}>
            {props.name}
        </div>
    )
}
