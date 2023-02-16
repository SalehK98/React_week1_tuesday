import React from 'react'

function Checkbox() {
    return (
        <form style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <label>
                <input type="checkbox"></input>
                I read the term of the app.
            </label>
            <label>
                <input type="checkbox"></input>
                I accept the term of the app.
            </label>
            <label>
                <input type="checkbox" defaultChecked></input>
                I want to get the weekly new letter.
            </label>
            <label>
                <input type="checkbox" defaultChecked></input>
                I want to get sales and offers
            </label>
        </form>
    )
}

export default Checkbox