export default (state = [], action) => {
    switch (action.type) {
        case 'add-todo':
            return [
                ...state,
                Object.assign({}, {id: action.payload.id, todo: action.payload.todo})
            ];
        case 'remove-todo':
            console.log(action);
            return removeObject(state, action.id);
        default:
            return state;
    }

}


const removeObject = (array, id) => {
    console.log(array);
    let newState=[];
    array.map(todo => {
            if (todo.id !== id) {
                newState.push(todo);
                console.log("Im in if");
                console.log(newState);
            }
            else if(todo.id === id){
                newState.push(-1);
                console.log("Im in else if");
                console.log(newState);
            }
        }
    );
    return newState;
};

