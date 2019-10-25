import { combineReducers } from 'redux';
import { articleReducer } from './articles';
import { searchReducer } from './search';

const rootReducer = combineReducers({
  article: articleReducer,
  search: searchReducer
});

export default rootReducer;