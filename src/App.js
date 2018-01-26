import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <form className="facebookLogin">
          <br></br>
          <label for="username">Username</label>
          <input type="text" name="username" id="username"></input>
          <br></br>
          <label for="password">Password</label>
          <input type="password" name="password" id="password"></input>
          <br></br>
          <button type="submit" value="Login">Login</button>
        </form>
      </div>
    );
  }
}

export default App;
