import { combineReducers } from 'redux';
import book from './book';
import reviews from './reviews';

const rootReducer = combineReducers({
    mybook: book,
    reviews: reviews
});

export default rootReducer;