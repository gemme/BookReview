

const INITIAL_STATE = {
    books: []
};


const book = (state = INITIAL_STATE, action) => {
    console.log('redicer::book');
    switch(action.type){
        case 'LOAD_BOOKS':
            return {
                ...state,
                books: action.data
            };
        default: return state;
    }

};


export default book;