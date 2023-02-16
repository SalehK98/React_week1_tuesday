import React from 'react'

function Review(props) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center"
        }}>

            <label>{props.info.First_Name}</label>
            <label>{props.info.Last_Name}</label>
            <label>{props.info.age}</label>
            <label>{props.info.Free_Text}</label>

            <div>
                <button onClick={() => {
                    props.changeScreen("form")
                }}>Back</button>
                <button onClick={() => {
                    props.changeScreen("sent")
                }}>Send</button>
            </div>
        </div>
    )
}

export default Review