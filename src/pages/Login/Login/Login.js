import React from 'react';
import { Button, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const {signInUsingGoogle, user} = useAuth();

    return (
        <>
            {user?.email ? 
            <div className='text-center'>
            <NavLink to="/home">
            <Button>
            Go Back Home
            </Button>
            </NavLink>
            </div>
            :
            <div className='text-center'>
                <h2>This is login page</h2>
                <div>
                <Button onClick={signInUsingGoogle}>
                Google Sign In
                </Button>
                
                </div>
            </div>

            }
        </>
    );
};

export default Login;