import { SEARCH, START, SUCCESS, ERROR } from '../utils/constants';

const initialState = {
  loading: false,
  loaded: false,
  result: [],
  flag: false,
};

export default ( state = initialState, action) => {

  switch( action.type ) {
    
    case SEARCH + START:
      console.log(action.type)
      return { ...state, loading: true};

    case SEARCH + SUCCESS:
      console.log(action.type)
      return { ...state, loading: false, loaded: true, result: action.response.map(item => item.show), flag: true };
    
    case SEARCH + ERROR:
    return { ...state, loading: false, loaded: false, error: action.error}

    default: 
      return state;
  }
}