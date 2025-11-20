import React, { useState, useEffect } from 'react';
import '../Login/Login.css';
import { Link } from 'react-router-dom';
import useFormValidation from '../hooks/useFormValidation';
import validateLogin from './validationLogin';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const Login = () => {
  const [success, setSuccess] = useState('');

  const {
    values, errors, touched, handleChange, handleBlur, handleSubmit,} = useFormValidation(
    { username: '', password: '' }, validateLogin
  );

  const navigate = useNavigate();


  const onSubmit = () => {

    
console.log("Username:", values.username);
  console.log("Password:", values.password);

const formData = new URLSearchParams();
formData.append("grant_type", "password");
formData.append("username", values.username);
formData.append("password", values.password);
formData.append("scope", "");
formData.append("client_id", "");
formData.append("client_secret", "");



axios.post("https://eatrove-api.mydemo.co/api/login", formData, {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
})
  .then((res) => {
localStorage.setItem("token", res.data.data.access_token);
    setSuccess("Login successful!");
    console.log("Login Successful", res);
      console.log("Login Response:", res.data);
    setTimeout(() => navigate("/dashboard"), 1000);
  })
  .catch((err) => {
    console.log("Login Failed", err.response?.data);
    setSuccess("Username or Password is incorrect");
  });


};

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <div className="body">
      <div className="login-card">
        <h1>Welcome Back</h1>
        <p>Please sign in to continue to your dashboard.</p>

        <form onSubmit={(e) => handleSubmit(e, onSubmit)}>
          {/* Username */}
          <label className="label">Username</label>
          <input name="username" type="text" placeholder="Enter your Username" 
          className={`input ${
              touched.username && errors.username ? 'input-error' : ''
            }`}
            value={values.username} onChange={handleChange} onBlur={handleBlur} minLength={3} maxLength={20}
          />
          {touched.username && errors.username && (
            <p className="error-text">{errors.username}</p>
          )}

          {/* Password */}
          <label className="label">Password</label>
          <input name="password" type="password" placeholder="Enter your password" 
          className={`input ${
              touched.password && errors.password ? 'input-error' : ''
            }`}
            value={values.password} onChange={handleChange}onBlur={handleBlur}
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
