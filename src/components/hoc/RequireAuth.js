import React from "react";
import {Navigate} from "react-router-dom";

export const RequireAuth = ({children}) => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user || !user.access_token){
        return <Navigate to='/login'/>
    }

    return children;
}