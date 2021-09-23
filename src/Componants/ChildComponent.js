import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <h1> Example Method as props</h1>
            <button onClick={() => props.greetHandler('Child Call')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
