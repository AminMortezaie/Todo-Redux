import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import {Provider} from 'react-redux';
import AddTodo from "./components/TodoList";
import {createStore} from "redux";
import Reducer from './reducers'
import 'semantic-ui-css/semantic.min.css'

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={createStore(Reducer)}>
        <AddTodo/>
    </Provider>
    , rootElement
);
