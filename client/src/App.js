import React,{Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Nav from "./components/Nav"
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Header from "./components/Header"
import 'bootstrap/dist/css/bootstrap.css'


class App extends  Component {
  render(){
    return (
      <Router>
        <div>
          <Header />
          <Nav />
          <Switch>
            <Route exact path ='/'  component={Search} /> 
            <Route path = '/saved' component ={Saved} /> 
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
