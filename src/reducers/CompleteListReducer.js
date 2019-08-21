export default (state = [], action) => {
    switch (action.type) {
        case 'complete_list':
            return [...state, action.payload];
        case 'not_complete':
            return 'not_complete';
        default:
            return state;
    }
};
