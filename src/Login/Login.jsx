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
    { email: '', password: '' }, validateLogin
  );

  const navigate = useNavigate();


  const onSubmit = () => {

    const payload = {
      email: values.email,
      password: values.password,
    };

    // console.log('Output:', payload);

axios.post('https://api.escuelajs.co/api/v1/auth/login', payload)
.then((res)=>{
        // saved token
  localStorage.setItem("token", res.data.access_token)
      setSuccess('Login successful!');
  console.log("Login Successful", res);  
  setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
})
.catch((err)=>{
        setSuccess('Email or Password is incorrect');
  console.log("Login Failed", err);  
})

};

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
          {/* Email */}
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your Email"
            className={`input ${
              touched.email && errors.email ? 'input-error' : ''
            }`}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            minLength={3}
            maxLength={20}
          />
          {touched.email && errors.email && (
            <p className="error-text">{errors.email}</p>
          )}

          {/* Password */}
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
