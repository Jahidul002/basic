import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Context/Context';
import useAdmin from '../Hook/UseAdmin';


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(authContext)
    const [isAdmin] = useAdmin(user?.email)
    const location = useLocation()

    if (loading) {
        console.log("yes found");
        return <button className="btn btn-square loading"></button>
    }

    if (!user && isAdmin) {
        return <Navigate to='/signin' state={{ from: location }} replace></Navigate>
    }
    return children;

};

export default AdminRoute;