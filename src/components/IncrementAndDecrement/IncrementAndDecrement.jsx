import React, { useState, useEffect } from 'react'

function IncrementAndDecrement() {
    let [value, setValue] = useState(0)
    let [color, setColor] = useState("black")
    useEffect(() => {
        if (-10 <= value && value < 0) {
            setColor("red")
        } else if (0 < value && value <= 10) {
            setColor("green")
        }
        else if (value === 0) {
            setColor("black")
        }

        //   return () => {
        //     second
        //   }
    }, [value])
    return (
        <div style={{ backgroundColor: color, color: "white" }}>
            <button onClick={() => {
                if (value < 10) {
                    setValue(value + 1)
                }
            }}>increment</button>
            <span>        </span>
            <button onClick={() => {
                if (value > -10) {
                    setValue(value - 1)
                }
            }}>decrement</button>
            <span>      {color}  </span>
            <label>{value}</label>
        </div>
    )
}

export default IncrementAndDecrement