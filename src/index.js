import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';

const feelingScore = (state = '', action) => {
    if (action.type === 'SET_FEELING_SCORE') {
        return action.payload;
    }
    return state;
}

const understandScore = (state = '', action) => {
    if (action.type === 'SET_UNDERSTAND_SCORE') {
        return action.payload;
    }
    return state;
}

const storeInstance = createStore(
    // reducers go here
    combineReducers(
        {
            feelingScore,
            understandScore,
        }
    ),
    applyMiddleware(logger)
);

ReactDOM.render( 
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root'));

registerServiceWorker();
