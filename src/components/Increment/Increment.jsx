import React from 'react'
import { useState } from 'react'

function Increment() {
    let [num, setNum] = useState(0)
    return (
        <div>
            <button onClick={() => {
                setNum(num + 1)
            }}>Increment</button>
            <span>      </span>
            <label>{num}</label>
        </div>
    )
}

export default Increment