import { Link, useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";


export default function Login(props) {
  const auth = useAuth();
  const history = useHistory();

  return (
    <>
      <h2>LOGIN</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <input value={auth.userName} onChange={(e) => auth.setUserName(e.target.value)}/>
        <button onClick={() => auth.logar(() =>  history.push(`/perfil/${auth.userName}`))}>
          Logar
        </button>
      </div>
    </>
  );
}
