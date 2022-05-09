import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import NotFound from "./containers/NotFound/NotFound";
import Login from "./containers/Login/Login";
import Signup from "./containers/Signup/Signup";
import Portfolio from "./containers/Portfolio/Portfolio";
import Services from "./containers/Services/Services";
import Contact from "./containers/Contact/Contact";
import FamilyPhotos from "./containers/FamilyPhotos/FamilyPhotos";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/portfolio">
        <Portfolio />
      </Route>
      <Route exact path="/services">
        <Services />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/Family Photos">
        <FamilyPhotos />
      </Route>
      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}