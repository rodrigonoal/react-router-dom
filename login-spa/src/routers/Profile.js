import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="Profile">
      <Link to="/" className="home-link">Home</Link>
      <Link to="/login" className="login-link">Login</Link>
    </div>
  );
}

export default Profile;