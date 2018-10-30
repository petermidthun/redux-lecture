import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';

const buttonOneReducer= (state={clickCount: 0}, action) => {   //state= sets default if nothing there
    if (action.type === 'BUTTON_ONE_CLICKED'){
        console.log('button one clicked - reducer');
        return {clickCount: state.clickCount+=1};
    }
    else {
        console.log('dont care that this happened');
    }
    console.log('state is now: ', state);
    return state;
}

const buttonTwoReducer= (state={clickCount: 0}, action) => {   //state= sets default if nothing there
    if (action.type === 'BUTTON_TWO_CLICKED'){
        console.log('button two clicked - reducer');
        return {clickCount: state.clickCount+=1};
    }
    else {
        console.log('dont care that this happened');
    }
    console.log('state is now: ', state);
    return state;
}


const totalClicksReducer= (state={clickCount: 0}, action) => {   //state= sets default if nothing there
    if (action.type === 'BUTTON_ONE_CLICKED' || 'BUTTON_TWO_CLICKED'){
        console.log('button clicked - reducer');
        return {clickCount: state.clickCount+=1};
    }
    else {
        console.log('dont care that this happened');
    }
    console.log('state is now: ', state);
    return state;
}

const storeInstance = createStore(
    combineReducers({
        buttonOneReducer,
        buttonTwoReducer,
        totalClicksReducer
    }),
    applyMiddleware(logger)
    
)




ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

