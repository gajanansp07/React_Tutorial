import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : 'Hello'
        }
        // this.clickHandler = this.clickHandler.bind(this)
        
        }
        clickHandler = () =>{
            this.setState({
                message: 'Good Bye'
            })
    }

    //  clickHandler() {
        
    //     // TypeError: Cannot read properties of undefined (reading 'setState')
    //     this.setState({
    //         message : 'Good Bye'
    //     })
    //     console.log(this)
    // }
    

    render() {
        return (
            <div>
                <h1> Event Binding Example : {this.state.message}</h1> {/*  Change the message to Goodbye */}
                {/* Approch 1 st : Binding in the render Method  Has some performance implications*/}
                {/* <button onClick={this.clickHandler.bind(this)}>Event Bind Click </button> */}
                {/* Approch 2 nd : Arrow function in render*/}
                {/* this also has performance implications as in cenario */}
                {/* <button onClick={() => this.clickHandler()}>Event Bind Click </button> */}
                {/* Approch 3 rd : Binding in the Constructor */}
                {/* <button onClick={this.clickHandler}>Event Bind Click </button> */}
                {/* Approch 4 th : Use an Arrow function as a class property */}
                <button onClick={this.clickHandler}>Event Bind Click </button>
            </div>
        )
    }
}

export default EventBind
