const redux = require('redux');

const initialState = {
    counter: 0,
};

const counterReducer = (state, action) => {
    return {
        counter: state.counter + 1
    };
};

const store = redux.createStore(counterReducer, initialState);

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({type: 'increment'});