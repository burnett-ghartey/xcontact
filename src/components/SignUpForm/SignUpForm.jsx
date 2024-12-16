import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import './SignUpForm.css'


export default function SignUpForm({
  email,
  setEmail,
  password,
  setPassword,
  onSubmit,
  emailError,
  passwordError
}) {
  return (
    <div className="signup-form">
      <form onSubmit={onSubmit}>
        <div>
          <p className='field-label'>
            <label htmlFor="email-address">Email Address</label>
          </p>
          <input
            id="email-address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <p className='field-label'>
             <label htmlFor="password">Password</label>
          </p>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button label="Sign Up"/>
        {/* Display error if email is invalid */}
        {emailError && <p style={{ color: 'red', textAlign: 'center' }}>{emailError}</p>}
        {/* Display error if email is invalid */}
        {passwordError && <p style={{ color: 'red', textAlign: 'center' }}>{passwordError}</p>}
      </form>
      <p className="form-account-status">
        Already have an account? {""}
        <NavLink to="/signin" style={{color: '#007bff'}}>Sign in</NavLink>
      </p>
    </div>
  );
}
