import { STORIES_BEGIN, STORIES_FAILURE, STORIES_SUCCESS } from './action';

const initialState = {
  items: {},
  loading: false,
  error: null,
};


export default function storiesReducer(state = initialState, action) {
  switch (action.type) {
    case STORIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case STORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.stories,
      };
    case STORIES_FAILURE:
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
