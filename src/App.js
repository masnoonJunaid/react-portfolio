import React from 'react';
import './App.css';
import {  Switch,Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import HomePage from "./components/HomePage"
import Status from "./components/Status"

class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component = {HomePage}/>
          <Route path="/status+goal+current projects+university_life" component={Status}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
