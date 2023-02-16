import React, { useState } from 'react'

function HideAndSeek() {
    let [visibility, setVisibility] = useState("hidden")
    return (
        <div style={{
            width: "200px",
            height: "300px",
            margin: "auto",
            border: "5px solid #000",
        }}>
            <button onClick={() => {
                console.log(visibility)
                visibility === "hidden" ? setVisibility("visible") : setVisibility("hidden")
            }}>show/hide</button>
            <div style={{
                width: "150px",
                height: "240px",
                backgroundColor: "yellow",
                visibility: visibility
            }}></div>
        </div>
    )
}

export default HideAndSeek