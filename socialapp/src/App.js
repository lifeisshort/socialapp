import React, { Component } from 'react' 
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import HomePage from './pages/HomePage'; 
import UserPage from './pages/user/UserPage'; 
import PostPage from './pages/post/PostPage';
import Header from './components/header/Header';
import UpdateObject from './components/update-object/UpdateObject';
 
 
export default class App extends Component {
 
  render() {
    return (
      <Router>
        <div>
          <Header></Header>
        </div>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/users" exact component={UserPage}></Route>
        <Route path="/posts" exact component={PostPage}></Route>
        <Route path="/update" exact component={UpdateObject}></Route>
      </Router>
    )
  }
}
