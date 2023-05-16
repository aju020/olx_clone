import React, { useContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Signup from './Pages/Signup'
import Home from './Pages/Home';
import LoginPage from './Pages/Login';
import { AuthContext, FirebaseContext } from './store/Context';
import CreatePage from './Pages/Create';
import ViewPost from './Pages/ViewPost';
import Post from './store/PostContext';


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
        <Post>
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
                        <Route path='/create'>
                                <CreatePage />
                        </Route>
                        <Route path='/view'>
                                <ViewPost />
                        </Route>
                                
                </Router>
     </Post> 
    </div>
  );
}

export default App;
