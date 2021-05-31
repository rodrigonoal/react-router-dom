import { useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Home(props) {
  const auth = useAuth();
  const history = useHistory();
  return (
    <div className='botoes'>
      <button onClick={() => history.push(`/${auth.userInfo.login}`)}>
        Perfil
      </button>
      <button onClick={() => history.push("/login")}>Login</button>
    </div>
  );
}
