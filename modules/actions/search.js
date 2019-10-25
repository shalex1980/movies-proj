import { SEARCH, START } from '../utils/constants';

export const actionSearch = (query) => {
  return {
    type: SEARCH,
    query
  }
}

export const actionSearchStart = () => {
  return {
    type: SEARCH + START
  }
}