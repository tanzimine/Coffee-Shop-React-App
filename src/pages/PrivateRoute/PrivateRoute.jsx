import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../../layout/MainLayout';
import Spinner from '../../components/Spinner';


const PrivateRoute = ({children}) => {
    console.log(children)
    const {user,loading} = useContext(authContext)
    if(loading){
        return <Spinner />
    }
    if(!user){
        return <Navigate to="/signin"></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;