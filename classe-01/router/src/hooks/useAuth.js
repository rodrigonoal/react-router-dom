import {useContext} from 'react';
import AuthContext from '../contexto/AuthContext';

export default function useAuth() {
    return useContext(AuthContext);
};