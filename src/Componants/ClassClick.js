import React, { Component } from 'react'

 class ClassClick extends Component {
     clickHandler(){
         console.log("Clicked the Class Button.")
     }
    render() {
        return (
            <div>
                {/* Dont add the parenthesis to the Handler */}
                <button onClick={this.clickHandler}> Click Me </button>
            </div>
        )
    }
}

export default ClassClick
