import { Outlet, Navigate } from 'react-router-dom';

function PrivateRout({ isLogged }) {
   return isLogged ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;