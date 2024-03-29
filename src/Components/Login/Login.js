import React from 'react';
import { FirebaseContext } from '../../store/Context';
import Logo from '../../olx-logo.png';
import './Login.css';
import { useState,useContext } from 'react';
import {useHistory,Link} from 'react-router-dom'

function Login() {
        const history = useHistory()
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const {firebase} =useContext(FirebaseContext )

        const handleLogin = (e)=>{
                e.preventDefault();
                firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
                        alert('Logged In')
                        history.push('/')
                }).catch((error)=>{
                        alert(error.message)
                })
        }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button type='submit' className='loginButton'>Login</button>
        </form>

                <Link to="/signup" className='signupButton'>Signup</Link>

        
      </div>
    </div>
  );
}

export default Login;
