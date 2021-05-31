import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav>
        <Link to="/perfil">Perfil</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
};

export default Home;
