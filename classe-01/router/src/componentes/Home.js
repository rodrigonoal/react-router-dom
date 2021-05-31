import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Home() {
    const auth = useAuth();

  return (
    <>
      <h2>HOME</h2>
      <div className="links">
        <Link to="/login/:nome">Login</Link>
        <Link to={`/perfil/${auth.userName}`}>Perfil</Link>
      </div>
    </>
  );
}
