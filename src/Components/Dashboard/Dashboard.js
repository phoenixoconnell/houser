import React, { Component } from "react";
import axios from 'axios';
import House from '../House/House';

export default class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            houses: []
        }
    }

    componentDidMount() {
        axios.get('/api/houses')
            .then(res => this.setState({houses: res.data}))
            .catch(err => console.log('Unable to retrieve data'))
    }

    getHouses() {
        axios.get('/api/houses')
            .then(res => this.setState({houses: res.data}))
            .catch(err => console.log('Unable to retrieve data'))
    }

    render() {
        const houses = this.state.houses.map((houses, i) => {
            return <li key={i}>{houses}</li>;
          });
        return (
            <div>
                <p>Dashboard</p>
                <House />
            </div>
        )
    }
}