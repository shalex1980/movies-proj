import { createStore, applyMiddleware, combineReducers } from 'redux';
import rootReducer from '../reducers'
import logger from 'redux-logger';
import init from '../middlewares';
import search from '../middlewares/search';

const enhancer = applyMiddleware(logger, init, search);

const store = createStore(rootReducer, {} , enhancer );


export default store;