import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./css/bootstrap.min.css";
import './css/styles.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/a-propos" exact component={About} />
        <Route exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
