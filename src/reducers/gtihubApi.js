import { ADD_NEW_OWNER, ADD_NEW_REPOSITORIES } from "../actions/githubApi";

export default function githubApi(state = {}, action) {
  switch (action.type) {
    case ADD_NEW_OWNER:
      return {
        ...state,
        [action.username]: {
          ...state[action.username],
          owner: action.owner,
        },
      };
    case ADD_NEW_REPOSITORIES:
      return {
        ...state,
        [action.username]: {
          ...state[action.username],
          repositories: action.repositories,
        },
      };
    default:
      return state;
  }
}
