import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Alert from "./components/Alert";
import AlertState from "./context/alert/alert-state";
import GithubState from "./context/gitgub/github-state";

function App() {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <Navbar />
          <div className="container pt-4">
            <Alert text="Test alert" />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/profile/:name" component={Profile} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
