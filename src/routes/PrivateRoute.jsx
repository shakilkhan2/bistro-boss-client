import { useContext } from "react";
import { AuthContext } from "../provider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
const {user, loading} = useContext(AuthContext);
const location = useLocation();


if(loading){
    return ("please wait")
}

if(user){
    return children;
}

    return (
        <Navigate to="/login" state={{from: location}} replace />
    );
};

export default PrivateRoute;