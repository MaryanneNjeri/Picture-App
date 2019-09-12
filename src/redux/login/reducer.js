import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_BEGIN } from './action';

const initialState = {
  item: {},
  loading: false,
  error: null,
};


export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        item: action.payload.body,
      };
    case LOGIN_FAILURE:
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
