/** TYPES */
export const Types = {
  GET_REQUEST: 'standings/GET_REQUEST',
  GET_SUCCESS: 'standings/GET_SUCCESS',
  GET_FILTER_INPUT: 'standings/GET_FILTER_INPUT',
};

/** * REDUCER  */
const INITIAL_STATE = {
  loading: false,
  filter: [],
  data: [],
};
