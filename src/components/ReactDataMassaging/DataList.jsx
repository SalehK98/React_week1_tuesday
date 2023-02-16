import React from 'react'
import data from '../../data/data'
import Name from './Name';
import Person from './Person';

function utilities() {
    const names = []
    data.map(el => names.push(el.name))
    const objs = data.filter(el => Date.parse(el.birthday) < Date.parse("1-1-1990"))
    return [names, objs]
}

function DataList() {
    const newD = utilities()
    const [newData, setNewData] = React.useState(newD)
    return (
        <div>
            {newData[0].map((el, idx) => {

                return <Name name={el} key={el + idx} />
            })}
            <br />
            {newData[1].map((el, idx) => {
                console.log(el.birthday + el.name + idx)
                return <><br /> <Person person={el} key={el.favoriteFoods.fish[0] + idx} /><br /></>


            })}
        </div>
    )
}

export default DataList