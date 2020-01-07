import React, { Fragment, useContext } from "react";
import Search from "../components/Search";
import Card from "../components/Card";
import { GithubContext } from "../context/gitgub/github-context";

const Home = () => {
  const { users, loading } = useContext(GithubContext);
  return (
    <Fragment>
      <Search />
      <div className="row">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          users.map(user => <Card user={user} key={user.id} />)
        )}
      </div>
    </Fragment>
  );
};

export default Home;
