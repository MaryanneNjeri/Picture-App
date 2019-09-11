import { SIGNUP_FAILURE, SIGNUP_SUCCESS, SIGNUP_BEGIN } from './action';

const initialState = {
  item: {},
  loading: false,
  error: null,
};


export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        item: action.payload.details,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        item: {},

      };
    default:
      return state;
  }
}
