import { useState } from "react";
import { useHistory } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

export default function Login() {
  const history = useHistory();
  const [erro, setErro] = useState(false);
  const auth = useAuth();

  const handleLogin = async e => {
    if (e.key !== "Enter") return;
    const response = await fetch(
      `https://api.github.com/users/${e.target.value}`
    );
    const result = await response.json();
    //console.log(result);
    if (response.status === 200) {
      //console.log("deu certo");
      setErro(false);
      auth.logar(result.login, () => history.push(`/${result.login}`));
    } else {
      //console.log("deu errado");
      setErro(true);
    }
  };

  return (
    <>
      <div className='botoes'>
        <label htmlFor='login'>Perfil Github</label>
        <input onKeyPress={handleLogin} type='text' id='login' />
      </div>
      {erro && <p>Usuário não encontrado.</p>}
      <div className='botoes'>
        <button onClick={() => history.push("/perfil")}>Perfil</button>
        <button onClick={() => history.push("/")}>Home</button>
      </div>
    </>
  );
}
