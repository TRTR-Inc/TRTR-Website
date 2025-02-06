import { useState } from "react";
import Auth from "../components/Auth/Auth";
import "../styles/homepage.css";

function Home() {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <div className="homepage">
      <h1>Welcome to TRTR</h1>
      <p>Your one-stop solution for business automation.</p>
      <button className="auth-button" onClick={() => setShowAuth(!showAuth)}>
        {showAuth ? "Close Sign In" : "Sign In / Sign Up"}
      </button>
      {showAuth && <Auth />}
    </div>
  );
}

export default Home;
