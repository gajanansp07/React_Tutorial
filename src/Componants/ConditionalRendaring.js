import React, { Component } from 'react'

class ConditionalRendaring extends Component {
constructor(props) {
    super(props)

    this.state = {
         isLogedin: false
    }
}
    
    render() {
        return this.state.isLogedin && <div>Welcome Mahesh.</div>

        // return(this.state.isLogedin?<div>WelCome Gitimoni</div>:"")

        // let message;
        // if(this.state.isLogedin)
        // message = <div>Welcome Gitimoni</div>
        // else
        // message = <div> Welcome Guest</div>
        // return message

    //     if(this.state.isLogedin){ return <div>Welcome Gitimoni</div>}
    //    else{return <div> Welcome Guest</div>}
       
       
        // return (
        //     <div>
        //         <div>Welcome Gitimoni</div>
        //         <div> Welcome Guest</div>
        //     </div>
        // )
    }
}

export default ConditionalRendaring
