/** TYPES */
export const Types = {
  GET_REQUEST: 'standings/GET_REQUEST',
  GET_SUCCESS: 'standings/GET_SUCCESS',
  GET_ERROR: 'standings/GET_ERROR',
};

/** * REDUCER  */
const INITIAL_STATE = {
  loading: true,
  msg: null,
  data: [],
};

export default function standings(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true, msg: null };

    case Types.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: null,
        data: action.payload.data,
      };

    case Types.GET_ERROR:
      return { ...state, loading: false, msg: action.payload };

    default:
      return state;
  }
}

/** * ACTIONS  */
export const Creators = {
  standingsRequest: id => ({ type: Types.GET_REQUEST, payload: id }),
  standingsRequestSuccess: data => ({ type: Types.GET_SUCCESS, payload: { data } }),
  standingsRequestError: error => ({ type: Types.GET_ERROR, payload: error }),
};
