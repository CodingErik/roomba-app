import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import NoMatch from "./pages/NoMatch";
import Nav from "./Nav/index";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path="/*" component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
