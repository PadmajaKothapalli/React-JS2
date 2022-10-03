import React, { Component } from 'react'

export class Product extends Component {
    state = {
        title: "The Catcher in the Ray",
        price: 570,
        qty: 2
    }
    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.state)}</pre>
                <h1>{this.state.name}</h1>
                <h1>{this.state.price}</h1>
                <span style={{ marginRight: '50px' }}></span>
                <button onClick={() => {
                    this.setState({
                        qty: this.state.qty - 1
                    })
                }}> - </button>
                {this.state.qty}
                <button>+</button>
            </div>
        )
    }
}

export default Product