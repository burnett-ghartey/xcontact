import logo from "../../assets/images/logo.png";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import SignInForm from "../../components/SignInForm/SignInForm";
import { validateEmail, validatePassword } from "../../utils/validate";

export default function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onLogin = (e) => {
    e.preventDefault();

    if (validateEmail(email) && validatePassword(password)) {
      setEmailError("");
      setPasswordError("");
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    } else {
      const emailErr = validateEmail(email);
      const passwordErr = validatePassword(password);

      if (emailError) {
        setEmailError(emailErr);
      }

      if (passwordErr) {
        setPasswordError(passwordErr);
      }
    }
  };
  return (
    <div className="signin-page">
      <div className="form-wrapper">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="signin-form-container">
          <h1 className="title">Sign in to Account</h1>
          <SignInForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            onLogin={onLogin}
            emailError={emailError}
            passwordError={passwordError}
          />
        </div>
      </div>
    </div>
  );
}
