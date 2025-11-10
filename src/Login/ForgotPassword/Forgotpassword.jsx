import React, { useState } from 'react';
import '../ForgotPassword/ForgotPassword.css';
import useFormValidation from '../../hooks/useFormValidation';
import validateForgotPassword from './validationForgotPassword';

const ForgotPassword = () => {
  const [success, setSuccess] = useState('');
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormValidation({ email: '' }, validateForgotPassword);

  const onSubmit = () => {
    setSuccess(' Reset instructions have been sent to your email!');
    console.log('Email:', values.email);
  };

  return (
    <div className="main">
      <div className="Forget-card">
        <h1>Forgot Password</h1>
        <p>
          Enter your email address and we'll send you instructions to reset your
          password.
        </p>

        <form onSubmit={(e) => handleSubmit(e, onSubmit)}>
          <label className="label-tag">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className={`input ${
              touched.email && errors.email ? 'input-error' : ''
            }`}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && (
            <p className="error-text">{errors.email}</p>
          )}

          {success && <p className="success-text">{success}</p>}

          <button className="btn" type="submit">
            Send Reset Instructions
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
