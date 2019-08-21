import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import App from "./App";
import AddTodo from "./components/TodoList";
import {createStore} from "redux";
import Reducer from './reducers'

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={createStore(Reducer)}>
        <App/>
        <AddTodo/>
    </Provider>
    , rootElement
);
