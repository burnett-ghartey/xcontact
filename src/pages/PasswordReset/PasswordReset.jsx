import logo from "../../assets/images/logo.png";
import React, { useState } from "react";
import PasswordResetForm from "../../components/PasswordResetForm/PasswordResetForm";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";

export default function PasswordReset() {
  const [email, setEmail] = useState("");

  const triggerResetEmail = (e) => {
    e.preventDefault()
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Password reset email has been sent.");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  };

  return (
    <div className="passwordreset-page">
      <div className="form-wrapper">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="passwordreset-form-container">
          <h1 className="title">Forgot Password?</h1>
          <PasswordResetForm email={email} setEmail={setEmail} triggerResetEmail={triggerResetEmail} />
        </div>
      </div>
    </div>
  );
}
