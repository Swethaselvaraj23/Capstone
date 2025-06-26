// src/TestAuth.jsx
import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"; // adjust path

export default function TestAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Signed up:", userCred.user);
    } catch (error) {
      console.error("Signup error:", error.message);
    }
  };

  const handleLogin = async () => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in:", userCred.user);
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Quick Auth Test</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Sign Up</button>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}
