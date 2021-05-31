import { Link, useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";



export default function Perfil() {
  const auth = useAuth();
  const history = useHistory();
  

function NomePerfil () {
    
    const {userProfile} = useAuth();
    
    return (
        <>
        <h2>{userProfile.name}</h2>
        <p>{userProfile.location}</p>
        </>
    )
  }

  return (
    <>
      <NomePerfil/>
      <div className="links">
        <Link to="/">Home</Link>
        <button onClick={() => auth.deslogar(() => history.push("/login"))}>
          Login
        </button>
      </div>
    </>
  );
}
