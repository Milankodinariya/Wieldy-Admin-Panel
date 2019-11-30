import React from "react";
import {Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";

const App = ({match}) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}sample`} component={asyncComponent(() => import('./SamplePage'))}/>
      <Route path={`${match.url}user-info`} component={asyncComponent(() => import('./UserInfo'))}/>
      <Route path={`${match.url}agency-info`} component={asyncComponent(() => import('./AgencyInfo'))}/>
    </Switch>
  </div>
);

export default App;
