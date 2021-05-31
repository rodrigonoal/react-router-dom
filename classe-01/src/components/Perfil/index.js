import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

export default function Perfil(props) {
  const history = useHistory();
  const { perfil } = useParams();
  const auth = useAuth();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://api.github.com/users/${perfil}`);
      const result = await response.json();
      auth.setUserInfo(result);
    };

    getData();
  }, [perfil]);

  return (
    <>
      <div className='card'>
        <img src={auth.userInfo.avatar_url} alt='' />
        <div className='info'>
          <p>{auth.userInfo.login}</p>
          <p>{`${auth.userInfo.public_repos} repositórios públicos.`}</p>
        </div>
      </div>
      <div className='botoes'>
        <button onClick={() => history.push("/")}>Home</button>
        <button onClick={() => auth.deslogar(() => history.push("/login"))}>
          Logout
        </button>
      </div>
    </>
  );
}
