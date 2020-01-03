import React, { Component } from "react";
import store, { UPDATE_STEPTWO } from './store';

export default class StepTWO extends Component {
    constructor() {
        super();

        const reduxState = store.getState();

        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zipcode: reduxState.zipcode,
            img: reduxState.img,
            mortgage: reduxState.mortgage,
            rent: reduxState.rent
        }
    }

    componentDidMount() {
        store.subscribe(() => {
          const reduxState = store.getState();
          this.setState({
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zipcode: reduxState.zipcode,
            img: reduxState.img,
            mortgage: reduxState.mortgage,
            rent: reduxState.rent
          });
        });
      }

      handleNextStep() {
        store.dispatch({
            type: UPDATE_STEPTWO,
            payload: this.state.newStepTwo
      })
    };
    render() {
        return (
            <div>
                <button onClick={() => this.handleNextStep()}>Next Step</button>
            </div>
        )
    }
}