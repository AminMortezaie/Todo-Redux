let nextTodoId = -1;

export const addTodo = (todo) => {
    return {
        type: 'add-todo',
        payload: {
            id: ++nextTodoId,
            todo
        }
    }
};
export const completeList = (todo) => {
    return {
        type: 'complete_list',
        payload: {
            id: todo.id,
            todo: todo.todo
        }
    }
};

export const deleteTodo = (todo) => {
    return {
        type: 'remove-todo',
        id: todo.id
    }
};
