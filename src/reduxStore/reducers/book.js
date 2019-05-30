

const INIT_STATE = {
    books: []
};

const book = (state = INIT_STATE, action) => {
    switch(action.type) {
        case 'LOAD_BOOKS':
        return {
            ...state,
            books: action.payload
        };
         default: return state;
    }
};


export default book;