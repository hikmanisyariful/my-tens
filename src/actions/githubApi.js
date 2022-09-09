import axios from "axios";

// CONSTANTS
export const ADD_NEW_OWNER = "ADD_NEW_OWNER";
export const ADD_NEW_REPOSITORIES = "ADD_NEW_REPOSITORIES";

// GET OWNER
export const getOwner = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

export const handleActionGetOwner = (response) => async (dispatch) => {
  const owner = {
    username: response.login,
    name: response.name,
    url: response.html_url,
    avatar: response.avatar_url,
    publicRepos: response.public_repos,
    createdDate: response.created_at,
    updatedDate: response.updated_at,
  };
  dispatch({
    type: ADD_NEW_OWNER,
    username: owner.username,
    owner,
  });
};

// GET REPOS
export const getRepositories = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}/repos`);
  return response.data;
};

export const handleActionGetRepositories = (response, username) => async (dispatch) => {
  const repositories = mapStateRepositories(response);
  dispatch({
    type: ADD_NEW_REPOSITORIES,
    username,
    repositories,
  });
};

// FUNCTION TO MANIPULATE DATA
const mapStateRepositories = (data) => {
  const repos = data.map((repo) => {
    return {
      id: repo.id,
      name: repo.name,
      urlRepo: repo.html_url,
      description: repo.description,
      language: repo.language,
      updatedDate: repo.updated_at,
    };
  });
  return repos;
};
