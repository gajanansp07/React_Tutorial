import React,{ Component } from "react";

class Message extends Component{
    constructor(){
        super()
        this.state ={
            message : ' Wel-come Visiters'
        }
    }
    changeMessage(){
        this.setState({
            message: ' Thank you to Subscribing..!'
        })
    }
render(){
    return(<div>
        <h1> {this.state.message} </h1>
        <button onClick={()=> this.changeMessage()}>Subscrib</button>
    </div>) 
}
}
export default Message