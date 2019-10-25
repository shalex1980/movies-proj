import { GET_INITIAL, SUCCESS, START } from '../utils/constants';

export function initialArticle() {
  return {
    type: GET_INITIAL,
    callAPI: 'http://api.tvmaze.com/shows'
  }
}
