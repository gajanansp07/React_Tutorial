import React from 'react'

function NameList() {
    const names = ['Gajanan', 'Mahesh', 'Ganesh', 'Gitimoni'];
    return (
        <div>
            <h2>
                <ul>
                    {names.map((name,index)=><h2 key={index}>{index} {name}</h2>)}
                </ul>
            </h2>
        </div>
    )
}

export default NameList
