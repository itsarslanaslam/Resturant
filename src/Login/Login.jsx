import React, { useState } from 'react'
import '../Login/Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

   const handleSubmit = (evt)=>{
      evt.preventDefault();
       if (!username || !password) {
    alert("Please fill out both fields!");
    return;
  }  
    //      console.log("Username:", username);
    // console.log("Password:", password);
    }
  return (
   <>
   <div className="body">
    <div className="login-card">
        <h1>Welcome Back</h1>
        <p>Please sign in to continue to your dashboard.</p>
<form onSubmit={handleSubmit}>
        <label className='label'>Username</label>
        <input onChange={(e)=>setUsername(e.target.value)} className='input' type="text" placeholder="Enter your username" value={username} />

        <label className='label'>Password</label>
        <input onChange={(e)=>setPassword(e.target.value)}  className='input' type="password" placeholder="Password" value={password}/>

        <button className='button' type='submit'>Sign In</button>
        </form>
        <br />
       <Link className='reset' to="/forgot-password">Forgot your password?</Link>
      </div>
</div>
   </>
  )
}

export default Login
