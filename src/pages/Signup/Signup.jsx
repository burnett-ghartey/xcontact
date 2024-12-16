import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { validateEmail, validatePassword } from "../../utils/validate";

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    if (validateEmail(email) === true && validatePassword(password) === true) {
      setEmailError("");
      setPasswordError("")
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCrendential) => {
          const user = userCrendential.user;
          console.log(user);
          navigate("/signin");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    } else {
      const emailErr = validateEmail(email);
      const passErr = validatePassword(password);

      if (emailErr) {
        setEmailError(emailErr);
      }
      if (passErr) {
        setPasswordError(passErr);
      }
    }
  };

  return (
    <div className="signup-page">
      <div className="form-wrapper">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="signup-form-container">
          <h1 className="title">Create an account</h1>
          <SignUpForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            onSubmit={onSubmit}
            emailError={emailError}
            passwordError={passwordError}
          />
        </div>
      </div>
    </div>
  );
}
