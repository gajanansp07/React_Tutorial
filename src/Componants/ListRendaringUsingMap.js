import React from 'react'
import ListParson from './ListParson'

function ListRendaringUsingMap() {
    
    const parsons = [
        {
            id:1,
            name : "Ganesh",
            age : 33,
            skills : "Node"
        },
        {
            id : 2,
            name : "Mahesh",
            age : 32,
            skills : "PHP"
        },
        {
            id : 3,
            name : "Gajanan",
            age : 34,
            skills : "Angular"
        }
    ]  
    const parsonList = parsons.map(parson => <ListParson parson={parson}></ListParson>
        // <h2> I am {parson.name}, I am {parson.age} year old and I Know {parson.skills}</h2>
    )

    return <div>{parsonList}</div>
    // const names = ["Ganesh","Mahesh","Gajanan","Gitimoni","Riyan","Aditi"];
    // const nameList = names.map(name => <li>{name}</li>)
    // return (
    //     <div>
    //         <h1>List Rendering Using map method</h1>
    //         <ul>{nameList}</ul>
    //     </div>
    // )
}

export default ListRendaringUsingMap
