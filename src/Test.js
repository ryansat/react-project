import React from 'react';
import logo from './logo.svg';
import './App.css';

function Test() {
  return (
    <div className="Test">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/Test.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Test page
        </a>
      </header>
    </div>
  );
}

export default Test;
