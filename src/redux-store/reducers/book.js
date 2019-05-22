

const INITIAL_STATE = {
    books: []
};


const book = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'LOAD_BOOKS':
            return {
                ...state,
                books: action.data
            };
        default: return INITIAL_STATE;
    }

};


export default book;