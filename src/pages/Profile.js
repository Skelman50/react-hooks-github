import React, { useContext, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { GithubContext } from "../context/gitgub/github-context";
import Repos from "../components/Repos";
import UserCard from "../components/UserCard";

const Profile = ({ match }) => {
  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext);
  const urlName = match.params.name;
  useEffect(() => {
    getUser(urlName);
    getRepos(urlName);
    // eslint-disable-next-line
  }, []);
  if (loading) {
    return <p className="text-center">Loading...</p>;
  }
  return (
    <Fragment>
      <Link className="btn btn-link" to="/">
        На главную
      </Link>
      <UserCard user={user} />
      <Repos repos={repos} />
    </Fragment>
  );
};

export default Profile;
