import React from "react";
import {connect} from 'react-redux'
import * as actions from '../actions'
import {Button, Input, Tab} from 'semantic-ui-react'
import '../css/todolist.css'

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {input: ''}
    }

    updateInput = event => {
        this.setState({input: event.target.value});
        console.log(this.state.input)
    };

    handleAddTodo = () => {
        this.props.addTodo(this.state.input);
    };

    render() {
        console.log(this.props);


        const panes = [
            {
                menuItem: 'Add-Todo', render: () =>
                    <Tab.Pane>
                        <Input autoFocus="autofocus" placeholder='Make Todo' onChange={this.updateInput}
                               value={this.state.input}/>
                        <Button inverted color='blue' onClick={() => this.handleAddTodo()}>
                            AddTodo
                        </Button>
                    </Tab.Pane>
            },
            {
                menuItem: 'Todo-List',
                render: () =>
                    this.props.todoList.map((todo) =>
                        todo !== -1 &&
                        <Tab.Pane>
                            <div>
                                <p>{todo.todo}</p>
                                <Button inverted color='green' onClick={() => {
                                    this.props.completeList(todo);
                                    this.props.deleteTodo(todo);
                                }}>
                                    Complete
                                </Button>
                                <Button inverted color='red' onClick={() => {
                                    this.props.deleteTodo(todo)
                                }}>Delete</Button>
                            </div>
                        </Tab.Pane>
                    )
            },

            {
                menuItem: 'Complete-List', render: () =>
                    this.props.completeListArray.map((completeElement) =>
                        <Tab.Pane>
                            <div>
                                <p>{completeElement.todo}</p>
                            </div>
                        </Tab.Pane>
                    )
            },
        ];


        const TabExampleLoading = () => <Tab panes={panes}/>;
        return (
            <div className="mytodo"><TabExampleLoading/></div>
        )

    }

}

const mapStateToProps = state => {
    return {
        todoList: state.TodoList,
        completeListArray: state.CompleteList
    }
};
export default connect(mapStateToProps, actions)(TodoList);
