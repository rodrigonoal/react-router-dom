import { useState } from "react";

export default function useProvideAuth() {
  const [token, setToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const logar = (user, callback) => {
    setToken(user);
    callback();
  };

  const deslogar = callback => {
    setToken(null);
    callback();
  };

  return { token, logar, deslogar, userInfo, setUserInfo };
}
