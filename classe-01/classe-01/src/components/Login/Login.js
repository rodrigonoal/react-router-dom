import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <nav>
        <Link to="/perfil">Perfil</Link>
        <Link to="/">Home</Link>
      </nav>
      <div>
        <input type="text" />
      </div>
    </div>
  );
};

export default Login;
