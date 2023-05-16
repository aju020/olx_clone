import React, { useContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Signup from './Pages/Signup'
import Home from './Pages/Home';
import LoginPage from './Pages/Login';
import { AuthContext, FirebaseContext } from './store/Context';


function App() {

        useEffect(()=>{
                console.log(user)
                firebase.auth().onAuthStateChanged((user)=>{
                        setUser(user)
                })

        })
        const {firebase} = useContext(FirebaseContext)
        const {user,setUser} = useContext(AuthContext)

  return (
    <div>
        <Router>
                <Route exact path='/'>
                        <Home />
                </Route>
                <Route path='/signup'>
                        <Signup />
                </Route>
                <Route path='/login'>
                        <LoginPage />
                </Route>
                        
        </Router>
      
    </div>
  );
}

export default App;
