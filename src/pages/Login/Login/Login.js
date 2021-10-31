import React from 'react';
import { Button} from 'react-bootstrap';
import { NavLink, useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const {signInUsingGoogle, user, setIsLoading } = useAuth();
    const location = useLocation()
    const redirect_url = location.state?.from || "/home"

    const history = useHistory()

    const handleGoogleLogin =()=>{
        setIsLoading(true)
        signInUsingGoogle()
        .then(result =>{
        history.push(redirect_url)
        })
        .finally(()=>setIsLoading(false))
       
    }


    return (
        <div className='custom-height d-flex align-items-center justify-content-center'>
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
                <Button onClick={handleGoogleLogin}>
                Google Sign In
                </Button>
                
                </div>
            </div>

            }
        </div>
    );
};

export default Login;