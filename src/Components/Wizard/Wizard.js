import React, { Component } from "react";
import store, { FORGET_VALUES } from './store'; 

export default class Wizard extends Component {
    constructor(){
        super();

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }
    }

    clearValues() {
        this.setState({
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0,
            img: '',
            mortgage: 0,
            rent: 0
        })
    }

    render() {
        return (
            <div>
                <p>Wizard</p>
                <input value={this.state.name}></input>
                <input value={this.state.address}></input>
                <input value={this.state.city}></input>
                <input value={this.state.state}></input>
                <input value={this.state.zipcode}></input>
                <button onClick={this.clearValues}>Cancel</button>
            </div>
        )
    }
}