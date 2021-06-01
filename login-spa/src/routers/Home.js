import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
        <Link to="/login" className="login-link">Login</Link>
        <Link to="/profile" className="profile-link">Profile</Link>
    </div>
  );
}

export default Home;