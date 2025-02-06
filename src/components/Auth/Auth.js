import React, { useState } from "react";
import "../../components/Auth.css";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  
  return (
    <div className="auth-container">
      <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
      <form>
        {isSignUp && (
          <input type="text" placeholder="Username" required />
        )}
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        {isSignUp && (
          <input type="password" placeholder="Confirm Password" required />
        )}
        <button type="submit">{isSignUp ? "Register" : "Login"}</button>
      </form>
      <p onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign up"}
      </p>
    </div>
  );
};

export default Auth;

