export default (state = [], action) => {
    switch (action.type) {
        case 'add-todo':
            console.log("action:");
            console.log(action);
            console.log("action.id:" + action.id);

            return [
                ...state,
                Object.assign({}, {id: action.payload.id, todo: action.payload.todo, isComplete: false})
            ];
        case 'remove-todo':
            return state.filter((data, i) => i !== action.id);
        default:
            return state;
    }

}

//
// {
//     id: 0,
//         todo: "make some tea",
//     isComplete:false
// },
// {
//     id: 1,
//         todo: "do homework",
//     isComplete: false
// }