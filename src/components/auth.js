import { useState, useContext, createContext, useContext } from 'react';

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
   const [ user, setUser ] = useState(''); 
   
   const Login = (user) => {
      setUser(user)
   }
   
   const Logout = () => {
   
      setUser(null)
   }
   
   return(
      <AuthContext.Provider value={{ user, login, logout }}>
         {children}
      </AuthContext.Provider>
   )
}

export const useAuth = () => {
   return useContext(AuthContext)
}