import React from "react";
import { NavLink, Link } from "react-router-dom";
import Button from "../Button/Button";
import "./SignInForm.css";

export default function SignInForm({
  email,
  setEmail,
  password,
  setPassword,
  onLogin,
  emailError,
  passwordError
}) {
  return (
    <div className="signin-form">
      <form onSubmit={onLogin}>
        <div>
          <p className="field-label">
            <label htmlFor="email-address">Email Address</label>
          </p>
          <input
            id="email-address"
            value={email}
            name={email}
            type="email"
            required
            placehoder="email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <div
            className="field-label"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <label htmlFor="password">Password</label>
            <Link to="/password-reset" style={{ textDecoration: "none", color: '#007bff'}}>
              Forgot?
            </Link>
          </div>

          <input
            id="password"
            value={password}
            name={password}
            type="password"
            required
            placehoder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button label="Sign in" />
        {
          emailError && <p style={{color: 'red', textAlign: 'center'}}>{emailError}</p>
        }
        {
          passwordError && <p style={{color: 'red', textAlign: 'center'}}>{passwordError}</p>
        }
      </form>
      <p className="form-account-status">
        No account yet? {""}
        <NavLink to="/signup" style={{ color: '#007bff'}}>Sign up</NavLink>
      </p>
    </div>
  );
}
