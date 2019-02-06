import { MockCompetitions } from '../../services/mock.api';
/** TYPES */
export const Types = {
  GET_REQUEST: 'competitions/GET_REQUEST',
  GET_SUCCESS: 'competitions/GET_SUCCESS',
};

/** * REDUCER  */
const INITIAL_STATE = {
  loading: false,
  data: [],
};
export default function competitions(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };

    case Types.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...action.payload.data],
      };

    default:
      return state;
  }
}

/** * ACTIONS  */
export const Creators = {
  competitionsRequest: () => ({ type: Types.GET_REQUEST }),

  competitionsSucess: data => ({
    type: Types.GET_SUCCESS,
    payload: {
      data,
    },
  }),
};
