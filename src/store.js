import { createStore } from 'redux';

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: 0,
    img: '',
    mortgage: 0,
    rent: 0
}

export const UPDATE_STEPONE = 'UPDATE_STEPONE';
export const UPDATE_STEPTWO = 'UPDATE_STEPTWO';
export const UPDATE_STEPTHREE = 'UPDATE_STEPTHREE';
export const FORGET_VALUES = 'FORGET_VALUES';

function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case UPDATE_STEPONE:
            const newStepOne = [...state.houses, payload]
            return {
                ...state,
                name: payload.name,
                address: payload.address,
                city: payload.city,
                state: payload.state,
                zipcode: payload.zipcode,
                img: '',
                mortgage: 0,
                rent: 0
            };
        case UPDATE_STEPTWO:
            return {

            }
        case UPDATE_STEPTHREE:
            return {

            }
        case FORGET_VALUES:
            return {
                name: '',
                address: '',
                city: '',
                state: '',
                zipcode: 0,
                img: '',
                mortgage: 0,
                rent: 0
            }
    }
}

export default createStore(reducer);