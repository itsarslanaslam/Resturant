import React, { useState } from 'react'
import '../ForgotPassword/ForgotPassword.css'

const Forgotpassword = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('') 
  const [success, setSuccess] = useState('') 

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setError('');
    setSuccess('');

    if (!email.trim()) {
      setError('Email is required.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setSuccess('Reset instructions have been sent to your email!');
  }

  return (
    <>
      <div className="main">
        <div className="Forget-card">
          <h1>Forgot Password</h1>
          <p>Enter your email address and we'll send you instructions to reset your password.</p>
          
          <form onSubmit={handleSubmit}>
            <label className='label-tag'>Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className='input'
              type="email"
              placeholder="Enter your email"
              value={email}
            />

            {error && <p className="error-text">{error}</p>}

            {success && <p className="success-text">{success}</p>}

            <button className='btn' type='submit'>Send Reset Instructions</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Forgotpassword
