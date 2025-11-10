import React, { useState, useEffect } from 'react';
import '../Login/Login.css';
import { Link } from 'react-router-dom';
import useFormValidation from '../hooks/useFormValidation';
import validateLogin from './validationLogin';

const Login = () => {
  const [success, setSuccess] = useState('');

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormValidation({ username: '', password: '' }, validateLogin);

  const onSubmit = () => {
    setSuccess('✅ Login successful! Redirecting to dashboard...');
    console.log('Username:', values.username);
    console.log('Password:', values.password);

    // 🧹 Clear input fields after successful login
    values.username = '';
    values.password = '';
  };

  // 🕒 Automatically clear success message after 4 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess('');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <div className="body">
      <div className="login-card">
        <h1>Welcome Back</h1>
        <p>Please sign in to continue to your dashboard.</p>

        <form onSubmit={(e) => handleSubmit(e, onSubmit)}>
          <label className="label">Username</label>
          <input
            name="username"
            type="text"
            placeholder="Enter your username"
            className={`input ${
              touched.username && errors.username ? 'input-error' : ''
            }`}
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            minLength={3}
            maxLength={20}
          />
          {touched.username && errors.username && (
            <p className="error-text">{errors.username}</p>
          )}

          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            className={`input ${
              touched.password && errors.password ? 'input-error' : ''
            }`}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.password && errors.password && (
            <p className="error-text">{errors.password}</p>
          )}

          {success && <p className="success-text">{success}</p>}

          <button className="button" type="submit">
            Sign In
          </button>
        </form>

        <br />
        <Link className="reset" to="/forgot-password">
          Forgot your password?
        </Link>
      </div>
    </div>
  );
};

export default Login;
