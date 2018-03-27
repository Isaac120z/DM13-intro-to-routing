import React, { Component } from "react";
import logo from "./logo.svg";
import routes from "./routes";
import something, { Link } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">Route1</Link>
          <Link to="/Route2">Route2</Link>
          <Link to="/Route3">Route3</Link>
          <Link to="/somewherewrong">404</Link>
        </header>

        {routes}
      </div>
    );
  }
}

export default App;
