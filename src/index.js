import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const domSelector = document.querySelector('.container');
const reactApp = (
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
);

ReactDOM.render( reactApp , domSelector );


// Create a new component. This component should produce
// some HTML

//