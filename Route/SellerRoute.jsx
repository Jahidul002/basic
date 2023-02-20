import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Context/Context';
import useSeller from '../Hook/UseSeller';


const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(authContext)
    const [isSeller] = useSeller(user?.email)
    const location = useLocation()

    if (loading) {
        console.log("yes found");
        return <button className="btn btn-square loading"></button>
    }

    if (!user && isSeller) {
        return <Navigate to='/signin' state={{ from: location }} replace></Navigate>
    }
    return children;

};

export default SellerRoute;