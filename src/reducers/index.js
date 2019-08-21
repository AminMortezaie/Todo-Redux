import {combineReducers} from "redux";
import TodoList from './TodoListReducer';
import CompleteList from "./CompleteListReducer";

export default combineReducers({
    TodoList,
    CompleteList
});
