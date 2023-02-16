import React, { useState } from 'react'
import Button from './Button'

function ButtonList(props) {
    let [myColor, setMyColor] = useState("xxx")
    const colorsList = props.colorsList
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {colorsList.map(el => <Button color={el} changeColor={setMyColor} key={el} />
            )}
            <span>{myColor}</span>
        </div>
    )
}

export default ButtonList