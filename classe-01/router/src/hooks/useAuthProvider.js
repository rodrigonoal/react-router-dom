import {useState} from 'react';

export default function useAuthProvider () {
    const [token, setToken] = useState(null);
    const [userProfile, setUserProfile] = useState();
    const [userName, setUserName] = useState("");

    async function logar (callback) {
        try {
            const resposta = await fetch(`https://api.github.com/users/${userName}`);
            const data = await resposta.json();
            if (resposta.status === 200) {
                setToken(resposta.status);
                setUserProfile(data);
                callback();
            }
            
            return;
        } catch (error) {
            return error.mensage;
        }
    }

    

    const deslogar = (callback) => {
        setToken(null);
        setUserName("");
        callback();
    }

    return { token, logar, deslogar, setUserProfile, userProfile, userName, setUserName }
}