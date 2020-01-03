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

function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case UPDATE_STEPONE:
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
    }
}

export default createStore(reducer);