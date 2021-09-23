import React from 'react'


function FunctionClick() {
    function clickHandler(){
        console.log("Button Clicked")
    }
    return (
        <div>
            {/* When you put the parenthsis at Event Handler function name then it converts to function call */}
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
