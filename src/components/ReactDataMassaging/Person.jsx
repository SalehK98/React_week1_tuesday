import React from 'react'

function Person(props) {
    return (
        <div>
            <label>Name: {props.person.name}</label>
            <br />
            <label>Birthday: {props.person.birthday}</label>
            <br />
            <label>Favorite Meats:{props.person.favoriteFoods.meats}</label>
            <br />
            <label>Favorite Fish:{props.person.favoriteFoods.fish}</label>
        </div>
    )
}

export default Person