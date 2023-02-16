import React from 'react'
import Review from './Review'

function FormReview() {
    let [screen, setScreen] = React.useState("form")
    let [info, setInfo] = React.useState({})

    const formStyle = {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center"

    }

    function handler(event) {
        setInfo({
            ...info, ...{ [event.target.id]: event.target.value }
        })

    }


    return (
        <>
            {screen === "form" ?
                <form style={formStyle} onSubmit={(e) => {
                    e.preventDefault()
                    setScreen("review")
                }}>
                    <label htmlFor='First_Name'>First Name <input placeholder='First Name' id='First_Name' onInput={handler} /></label>
                    <label htmlFor='Last_Name'>Last Name <input placeholder='Last Name' id='Last_Name' onInput={handler} /></label>
                    <label htmlFor='age'>Age: <select name='age' id='age' onChange={handler}>
                        {(() => {
                            const options = []
                            for (let i = 0; i < 16; i++) {
                                options.push(<option value={i} key={i}>{i}</option>)
                            }
                            return options
                        })()}
                    </select></label>

                    <label htmlFor='Free_Text'>Free Text: <textarea placeholder='Free Text' id='Free_Text' onInput={handler} /></label>
                    <input type='submit' />
                </form>
                : screen === "review" ?
                    <Review changeScreen={setScreen} info={info} />
                    : <><h1>Sent</h1><button onClick={() => { setScreen("form") }}>new survey</button></>

            }
        </>
    )
}

export default FormReview