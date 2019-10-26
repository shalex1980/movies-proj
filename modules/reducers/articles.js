import { GET_INITIAL, SUCCESS, ERROR, START } from '../utils/constants';

const initialState = {
  loading: false,
  loaded: false,
  result: []
};

export default ( state = initialState, action) => {

  switch(action.type) {

    case GET_INITIAL + START:
      return { ...state, loading: true};
      
    case GET_INITIAL + SUCCESS:
      return { ...state, loading: false, loaded: true, result: [...action.response] };

    case GET_INITIAL + ERROR:
      return { ...state, loading: false, loaded: false, error: action.error}
    
    default: 
      return state;
  }
}
