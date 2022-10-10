import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import {useDispatch, useSelector} from 'react-redux';

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./features/counter/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(
    ()=>{
      const unsubscribe = onAuthStateChanged(auth, (authUser)=>{
        if(authUser){
          // User Logged in
          dispatch(login({
            uid: authUser.uid,
            email: authUser.email,
          }))
          console.log("Logged in user");
        }
        else{
          // Not Logged in
          dispatch(logout);
        }


        return unsubscribe;
      })
    }, [])


  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
