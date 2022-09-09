import { SET_IS_LOGIN } from "../actions/authLogin";

const initialState = {
  isLogin: "",
};

export default function authLogin(state = initialState, action) {
  switch (action.type) {
    case SET_IS_LOGIN:
      return {
        ...state,
        isLogin: action.username,
      };

    default:
      return state;
  }
}
