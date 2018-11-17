import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <Link to="/">Home</Link> <Link to="/otherpage">Other Page</Link>
          </header>
          <hr />
          <Route exact path="/" component={Fib} />
          <Route exact path="/otherpage" component={OtherPage} />
          <h1>This is Main Page</h1>
        </div>
      </Router>
    );
  }
}

export default App;
