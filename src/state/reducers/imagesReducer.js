const reducer = (state = [], action) => {
    switch(action.type) {
        case "fetch_images":
            return state + action.payload;
        default:
            return state
    }
};

export default reducer;