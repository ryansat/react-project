import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Test from './Test'
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="App-ul">
            <li  className="App-li">
              <a >  <Link to="/" className="App-link">Home</Link> </a>
            </li>
            <li className="App-li">
              <a >  <Link to="/about" className="App-link">About</Link> </a>
            </li>
            <li className="App-li">
            <a >  <Link to="/portofolio" className="App-link">Portofolio</Link> </a>
            </li>
            <li className="App-li">
            <a >  <Link to="/test" className="App-link">Test</Link> </a>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portofolio">
            <Portofolio />
          </Route>
          <Route path="/Test">
            <Test />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h2>About</h2>;
}

function Portofolio() {
  return <h2>My Portofolio</h2>;
}
