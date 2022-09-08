import { ADD_NEW_OWNER, ADD_NEW_REPOSITORIES } from "../actions/githubApi";

const initialState = {
  hikmanisyariful: {
    owner: {},
    repositories: [],
  },
};

export default function githubApi(state = {}, action) {
  switch (action.type) {
    case ADD_NEW_OWNER:
      return {
        ...state,
        [action.data.username]: {
          ...state[action.data.username],
          owner: action.data,
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
