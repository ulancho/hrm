import {Navigate} from "react-router-dom";

export const RequireAuth = ({children}) => {
    if (!auth){
        return <Navigate to='/login'/>
    }

    return children;
}