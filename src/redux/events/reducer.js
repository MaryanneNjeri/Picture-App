import { EVENTS_BEGIN, EVENTS_FAILURE, EVENTS_SUCCESS } from './action';

const initialState = {
  items: {},
  loading: false,
  error: null,
};


export default function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case EVENTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.events,
      };
    case EVENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: {},

      };
    default:
      return state;
  }
}
