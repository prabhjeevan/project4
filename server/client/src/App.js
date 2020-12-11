import React,{useEffect, createContext,useReducer, useContext} from 'react';
import NavBar from './components/Navbar'
import './App.css';
import {BrowserRouter, Route,Switch,useHistory}  from 'react-router-dom'
import Home from './components/Pages/Home'
import SignIn from './components/Pages/SignIn'
import Profile from './components/Pages/Profile'
import Signup from './components/Pages/Signup'
import CreatePost from './components/Pages/CreatePost'
import {reducer,initialState} from'./reducers/userReducer'

export const UserContext = createContext()

const Routing =()=>{
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
    } else {
      history.push('/signin')
    }
  },[])

  return(
    <Switch>
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
      </Switch>
  )
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <NavBar/> 
      <Routing/>
      
    </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App;
