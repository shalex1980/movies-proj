import { createStore, applyMiddleware, combineReducers } from 'redux';
//import { /*initialState,*/ articleReducer } from '../reducers/articles';
//import { searchReducer } from '../reducers/search';
import rootReducer from '../reducers'
import logger from 'redux-logger';
import init from '../middlewares';
import search from '../middlewares/search';

const enhancer = applyMiddleware(logger, init, search);
/*const rootReducers = combineReducers({
  articleReducer: articleReducer,
  searchReducer: searchReducer
});*/

const initialState = {
  loading: false,
  loaded: false,
  result: [],
  search: {
    loading: false,
    loaded: false,
    result: []
  }
};

const store = createStore(rootReducer, {} , enhancer );


export default store;