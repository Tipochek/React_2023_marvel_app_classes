import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

const initialState = { value: 0 };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC':
            return {
                ...state,
                value: state.value + 1,
            };
        case 'DEC':
            return {
                ...state,
                value: state.value - 1,
            };
        case 'RND':
            return {
                ...state,
                value: action.payload,
            };
        case 'RES':
            return {
                ...state,
                value: state.value = 0,
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

const update = () => {
    document.getElementById('counter').textContent = store.getState().value;
};

store.subscribe(update);

const inc = () => ({ type: 'INC' });
const dec = () => ({ type: 'DEC' });
const rnd = (value) => ({ type: 'RND', payload: value });
const res = () => ({ type: 'RES' });

document.getElementById('inc').addEventListener('click', () => {
    store.dispatch(inc());
});

document.getElementById('dec').addEventListener('click', () => {
    store.dispatch(dec());
});

document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 100);
    store.dispatch(rnd(value));
});

document.getElementById('res').addEventListener('click', () => {
    store.dispatch(res());
});

ReactDOM.render(
    <React.StrictMode>
        <></>
    </React.StrictMode>,
    document.getElementById('root')
);
