export const SET_IS_LOGIN = "SET_IS_LOGIN";

export const handleActionSetIsLogin = (username) => async (dispatch) => {
  dispatch({
    type: SET_IS_LOGIN,
    username,
  });
};
