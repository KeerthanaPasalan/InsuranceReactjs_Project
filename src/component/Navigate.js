import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coverage from "./Coverage";
import ParentPage from "./ParentPage";

class Navigate extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ParentPage} />
          <Route exact path="/Coverage" component={Coverage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Navigate;
