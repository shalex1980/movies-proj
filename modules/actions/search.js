import { SEARCH } from '../utils/constants';

export const actionSearch = (query) => {
  return {
    type: SEARCH,
    query
  }
}