/** TYPES */
export const Types = {
  GET_REQUEST: 'standings/GET_REQUEST',
  GET_SUCCESS: 'standings/GET_SUCCESS',
  GET_FILTER_INPUT: 'standings/GET_FILTER_INPUT',
};

/** * REDUCER  */
const INITIAL_STATE = {
  loading: false,
  data: [],
};

export default function standings(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };

    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };

    default:
      return state;
  }
}

/** * ACTIONS  */
export const Creators = {
  standingsRequest: id => ({ type: Types.GET_REQUEST, payload: id }),
  standingsRequestSuccess: data => ({ type: Types.GET_SUCCESS, payload: { data } }),
};
