/** TYPES */
export const Types = {
  GET_REQUEST: 'competitions/GET_REQUEST',
  GET_SUCCESS: 'competitions/GET_SUCCESS',
  GET_FILTER_INPUT: 'competitions/GET_FILTER_INPUT',
  GET_FILTER_CLEAR: 'competitions/GET_FILTER_CLEAR',
};

/** * REDUCER  */
const INITIAL_STATE = {
  loading: false,
  filter: [],
  data: [],
};

export default function competitions(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };

    case Types.GET_FILTER_CLEAR:
      return { ...state, loading: false, filter: [] };

    case Types.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...action.payload.data],
        // filter: [...action.payload.data],
      };

    case Types.GET_FILTER_INPUT: {
      const isNumber = action.payload.match(/^[0-9]+$/);
      const filtered = isNumber
        ? state.data.filter(i => i.id == parseInt(action.payload, 10))
        : state.data.filter(
          i => i.name.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1
              || i.area.name.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1,
        );
      return {
        ...state,
        loading: false,
        filter: filtered,
      };
    }

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

  competitionsFiltered: query => ({ type: Types.GET_FILTER_INPUT, payload: query }),

  clearFiltered: () => ({ type: Types.GET_FILTER_CLEAR }),
};
