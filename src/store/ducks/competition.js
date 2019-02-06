import { competitions } from '../../services/mock.api';
/** TYPES */
export const Types = {
  GET_REQUEST: 'competition/GET_REQUEST',
  GET_SUCCESS: 'competition/GET_SUCCESS',
};

/** * REDUCER  */
const INITIAL_STATE = {
  loading: false,
  data: competitions.competitions,
};
export default function competition(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };

    case Types.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: { ...action.payload.data },
      };

    default:
      return state;
  }
}

/** * ACTIONS  */
export const Creators = {
  competitionRequest: token => ({ type: Types.GET_REQUEST, payload: { token } }),

  competitionSucess: data => ({
    type: Types.GET_SUCCESS,
    payload: {
      data,
    },
  }),
};
