import { Navigate } from 'react-router-dom';
import { useAuth } from './auth';

export const RequireAuth = ({ children }) => {
   const auth = useAuth()
   
   if (!auth.user) {
      return <Navigate to="/" />
   }
   return children
}