import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {rootReducer} from "./store/reducers/rootReducer";
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import 'reactjs-popup/dist/index.css';



// const store = createStore(rootReducer, compose(
//     applyMiddleware(
//         thunk
//     ),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk
    )));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

