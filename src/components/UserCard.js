import React, { Fragment } from "react";

const UserCard = ({
  user: {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    public_repos,
    public_gists,
    following
  }
}) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-3 text-center">
            <img src={avatar_url} alt={name} style={{ width: "150px" }} />
            <h1>{name}</h1>
            {location && <p>Location: {location}</p>}
          </div>
          <div className="col">
            {bio && (
              <Fragment>
                <h3>BIO</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a
              href={html_url}
              target="_blank"
              className="btn btn-dark"
              rel="noopener noreferrer"
            >
              Open Profile
            </a>
            <ul>
              {login && (
                <li>
                  <strong>Username: </strong> {login}
                </li>
              )}
              {company && (
                <li>
                  <strong>Company: </strong> {company}
                </li>
              )}
              {blog && (
                <li>
                  <strong>Website: </strong> {blog}
                </li>
              )}
            </ul>
            <div className="badge badge-primary">Followers: {followers}</div>
            <div className="badge badge-success">Following: {following}</div>
            <div className="badge badge-info">Repos: {public_repos}</div>
            <div className="badge badge-dark">Gists: {public_gists}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
