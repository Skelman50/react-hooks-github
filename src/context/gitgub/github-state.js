import React, { useReducer } from "react";
import axios from "axios";
import { GithubContext } from "./github-context";
import { githubReducer } from "./github-reducer";
import {
  SEARCH_USERS,
  GET_USER,
  GET_REPOS,
  CLEAR_USERS,
  SET_LOADING
} from "../types";

const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

const withCreds = url =>
  `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

const searchURL = value =>
  withCreds(`https://api.github.com/search/users?q=${value}&`);

const getUserUrl = name => withCreds(`https://api.github.com/users/${name}?`);

const getReposUrl = name =>
  withCreds(`https://api.github.com/users/${name}/repos?per_page=5&`);

const GithubState = ({ children }) => {
  const initialState = {
    user: {},
    users: [],
    loading: false,
    repos: []
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const search = async value => {
    setLoading();
    const response = await axios.get(searchURL(value));
    dispatch({ type: SEARCH_USERS, payload: response.data.items });
  };

  const getUser = async name => {
    setLoading();
    const response = await axios.get(getUserUrl(name));
    dispatch({ type: GET_USER, payload: response.data });
  };

  const getRepos = async name => {
    setLoading();
    const response = await axios.get(getReposUrl(name));
    dispatch({ type: GET_REPOS, payload: response.data });
  };

  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  const setLoading = () => dispatch({ type: SET_LOADING });

  const { user, users, repos, loading } = state;

  return (
    <GithubContext.Provider
      value={{
        search,
        setLoading,
        getUser,
        getRepos,
        clearUsers,
        users,
        user,
        repos,
        loading
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubState;
