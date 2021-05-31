import { useContext } from 'react';

import AuthContext from '../context/AuthContext/index';

export default function useAuth() {
   return useContext(AuthContext);
}