import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super()
        this.state ={
            count : 0
        }
    }
    Increment(){
    //     this.setState({
    //         count : this.state.count+1
    //         //To haddle call after setState we have second paramiter to a setState method
    //     },()=>{console.log("CALLBACK VALUE: ",this.state.count)})
    //     // callBack functon as a second paramiter to a setState method 
    //     // this.state.count = this.state.count + 1
        console.log("WITHOUT",this.state.count)//IS BEING CALLED BEFOR THE STATE IS ACTUALLY SET
    this.setState((prevState)=>({
        count : prevState.count+1
    }))
    }
    
    IncrementFive(){
        //React group multipul setState calls into a single update for beter performance
        //whenever you have to update state bassed on previous state we need to pass a function as an argument 
        //to setState method insted of passing in an Object 

        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
    }
    render() {
        return (
            <div>
                <h1>Counter : {this.state.count}</h1> 
                <button onClick={() => this.IncrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
