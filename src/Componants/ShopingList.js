import React, { Component } from 'react'

class ShopingList extends Component {
    render() {
        return (
            <div>
                <h1> Shoping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>FaceBook</li>
                </ul>
            </div>
        );
    }
}

export default ShopingList
