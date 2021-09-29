import React from 'react'

export default function ListParson({parson}) {
    return (
        <div>
            <h2> I am {parson.name}, I am {parson.age} year old and I Know {parson.skills}</h2>
        </div>
    )
}
