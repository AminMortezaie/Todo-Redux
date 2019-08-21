export const completeList = (todoId) => {
    return {
        type: 'complete_list',
        payload: todoId
    }
};

