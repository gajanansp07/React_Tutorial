import React from "react";

const Greet = props => {
    console.log(props)  
return (
    <div><h1>{props.language} a. k. a. {props.name} Welcome to React Js</h1>
    {props.children}</div>
    )
}

export default Greet