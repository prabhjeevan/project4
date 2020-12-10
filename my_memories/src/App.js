import React from 'react';
import NavBar from './components/Navbar'
import './App.css';
import {BrowserRouter, Route}  from 'react-router-dom'
import Home from './components/Pages/Home'
import SignIn from './components/Pages/SignIn'
import Profile from './components/Pages/Profile'
import Signup from './components/Pages/Signup'
import CreatePost from './components/Pages/CreatePost'


function App() {
  return (
    <BrowserRouter>
      <NavBar/> 
      <Route exact path ='/'>
        <Home />
      </Route>
      <Route path='/signin'>
        <SignIn />
      </Route>
      <Route path='/signup'>
        <Signup />
      </Route>
      <Route path='/profile'>
        <Profile />
      </Route>
      <Route path='/create'>
        <CreatePost />
      </Route>
    </BrowserRouter>
  )
}

export default App;
