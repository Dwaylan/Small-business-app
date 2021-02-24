import React from "react";
import { Switch, Route } from "react-router";
import LandingPage from "./Components/Landingpage";
import Loginpage from "./Components/Loginpage";
import Listingspage from "./Components/Listingspage";
import Privateroute from "./Privateroute";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/login" component={Loginpage} />
      <Privateroute exact path="/listings" component={Listingspage} isPrivate />
    </Switch>
  );
};

export default Router;
