const INITIAL_STATE = {
    reviews: [],
    submitting: false
};

const review = (state = INITIAL_STATE, action) => {

    console.log('reducer, review state', state);

    switch(action.type){
        case 'LOAD_REVIEWS':
            return {
                ...state,
                reviews: action.data
            };
        case 'SUBMIT_REVIEW':
            return {
                ...state,
                reviews: [...state.reviews, action.data]
            };
        case 'SUBMITTING':
            return {
                ...state,
                submitting: action.data
            };
        default: return state;
    }
};


export default review;