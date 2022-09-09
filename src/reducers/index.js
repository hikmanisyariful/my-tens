import { combineReducers } from "redux";
import githubApi from "./gtihubApi";
import authLogin from "./authLogin";

export default combineReducers({
  githubApi,
  authLogin,
});
