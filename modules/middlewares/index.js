import { GET_INITIAL, SUCCESS, ERROR, START } from '../utils/constants';
import fetch from 'isomorphic-unfetch';

export default store => next => action => {

  const { callAPI, type, ...rest } = action;

  if(!callAPI) return next(action);
  
  next({ ...rest, type: type + START });

  fetch(callAPI)
    .then(res => res.json())
    .then(response => next({...rest, type: type + SUCCESS, response}))
    .catch(error => next({...rest, type: type + ERROR, error}))
} 