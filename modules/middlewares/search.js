import { START, SUCCESS, ERROR } from '../utils/constants';
import fetch from 'isomorphic-unfetch';

export default store => next => action => {
  
  const { query, type, ...rest } = action;

  if(!query){
    console.log('search middleware');
    return next(action);
  } 

  next({...rest, type: type + START});

  fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
  .then(res => res.json())
  .then(response => next({...rest, type: type + SUCCESS, response}))
  .catch(error => next({...rest, type: type + ERROR, error}))
}