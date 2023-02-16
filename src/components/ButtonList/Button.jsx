import React from 'react'

function Button(props) {
    return (
        <button
            style={{ backgroundColor: props.color }}
            onClick={() => { props.changeColor(props.color) }}
        >{props.color}</button>
    )
}

export default Button