import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Detail, Search } from 'src';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

class App extends Component {
  render() {
      return (
          <div>
              <Route exact path="/" component={Home}/>
              <Route path="/Detail" component={Detail}/>
              <Route path="/Search" component={Search}/>
          </div>
      );
  }
}

export default App;
