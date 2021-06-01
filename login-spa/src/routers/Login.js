import React from "react";
import { Link } from "react-router-dom";

function Login() {
  
  return (
    <div className="Login">
      <Link to="/profile" className="profile-link">Perfil</Link>
      <Link to="/" className="home-link">Home</Link>
    </div>
  );
}

export default Login;