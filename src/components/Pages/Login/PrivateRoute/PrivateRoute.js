import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const PrivateRoute = ({ children }) => {

    const location = useLocation();
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <CircularProgress />
    }

    if (!(user.email) || !(user.displayName)) {
        return <Navigate
            to='/login' state={{ from: location }}
        />;
    }
    if ((user.email) && (user.displayName) && (user.accountType === 'student')) {
        return <Navigate to='/studentHome' state={{ from: location }} />;
    }
    return children;




};

export default PrivateRoute;