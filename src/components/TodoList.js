import React from "react";
import {connect} from 'react-redux'
import * as actions from '../actions'


class TodoList extends React.Component {

    render() {
        console.log(this.props);
        return (

            this.props.todoList.map((todo) =>
                <div>
                    <p>{todo.todo}</p>
                    <button id='button' onClick={() => {
                        this.props.completeList(todo.id);
                    }}>
                        Complete
                    </button>
                </div>
            )
        );
    }

}

const mapStateToProps = state => {
    return {
        todoList: state.TodoList,
        completeListArray: state.CompleteList
    }
};
export default connect(mapStateToProps, actions)(TodoList);
