import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createSore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/app';
import UserList from './components/child';
import reducers from './reducers';

const createStoreWhitMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider stores={createStoreWhitMiddleware(reducers)}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="users" component={UsersList} />
            </Route>
        </Router>
    </Provider>
    , document.querySelector('.container'));
        
