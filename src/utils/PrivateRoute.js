import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest}) => {
   let auth = {'token': false}
   
   return (
      <Route {...rest}>
         {!auth.token
          ?
          <Redirect to="/" />
          :
          children}
      </Route>
   )
}

export default PrivateRoute;