import React, { Component } from 'react';
//class Compnent Example
class Welcome extends Component{
    render(){                       //Must render the class componant if you want to use
        return <h1> Welcome {this.props.name} a. k. a. {this.props.language} </h1>
    }
}

export default Welcome