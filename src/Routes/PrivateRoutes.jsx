import React, { useContext } from 'react';
import { AuthContext } from '../Providers/Authprovider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user } = useContext(AuthContext)
    if (user) {
        return children;
    }
    return <Navigate to='/login' replace={true}></Navigate>
};

export default PrivateRoutes;