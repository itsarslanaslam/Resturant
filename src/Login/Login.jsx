import React, { useState } from 'react'
import '../Login/Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setError(''); 

    if (!username.trim() && !password.trim()) {
      setError('Please enter both username and password.');
      return;
    }

    if (!username.trim()) {
      setError('Username is required.');
      return;
    }

    if (!password.trim()) {
      setError('Password is required.');
      return;
    }

    // console.log('Username:', username);
    // console.log('Password:', password);

  }

  return (
    <>
      <div className="body">
        <div className="login-card">
          <h1>Welcome Back</h1>
          <p>Please sign in to continue to your dashboard.</p>

          <form onSubmit={handleSubmit}>
            <label className='label'>Username</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              className='input'
              type="text"
              placeholder="Enter your username"
              value={username}
            />

            <label className='label'>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className='input'
              type="password"
              placeholder="Password"
              value={password}
            />

            {error && <p className="error-text">{error}</p>}

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
