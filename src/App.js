import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import PasswordReset from "./pages/PasswordReset/PasswordReset";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";

export default function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("user is logged out");
      }
    });
  });

  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/" element={user ? <Home /> : <Signin />} />
        {/* <Route path="contacts" element={<ContactList />}>
            <Route path="new" element={<AddContact />} />
            <Route path="edit" element={<AddContact />} />
        </Route> */}

        <Route path="new" element={<AddContact />} />
       
      </Routes>
    </div>
  );
}
