import React, { Component } from "react";

export default class Articles extends Component {
    constructor () {
        super()

        this.state ={
            value: 0
        }

        this.handleValue = this.handleValue.bind(this);
    }

    handleValue(num) {
        this.setState ({
            value: this.state.value + num
        })
    }

    render () {
        return (
            <div>
                <div className="articleText">
                    <p>This is an article, and this deals with state. <br/>Here is my counter:</p>
                </div>

                <div className="counter">
                    <h3>The count is currently at: {this.state.value}</h3>
                    <button onClick={() => this.handleValue(1)}>Add</button>
                    <button onClick={() => this.handleValue(-1)}>Subtract</button>
                </div>
            </div>
            ) 
    }
}