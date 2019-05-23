import { combineReducers } from 'redux';
import book from './book';
import review from './review';

const rootReducer = combineReducers({
    book,
    review
  });

export default rootReducer;