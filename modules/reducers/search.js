import { SEARCH, START, SUCCESS, ERROR } from '../utils/constants';

const initialState = {
  search: {
    loading: false,
    loaded: false,
    response: []
  }
}

export const searchReducer = ( state = initialState, action) => {

  switch( action.type ) {
    
    case SEARCH + START:
      console.log(action.type)
      return {...state, search: { ...state.search, loading: true }};

    case SEARCH + SUCCESS:
      console.log(action.type)
      return {...state, search: { ...search.searh, loading: false, loaded: true, response: action.response }};

    default: 
      return state;
  }
}