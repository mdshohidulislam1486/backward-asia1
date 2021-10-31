import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo/logo1.png'
import './Header.css'

const Header = () => {

    const {user, logOut} = useAuth()
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="warning" variant="light">
                <Container>
                <Navbar.Brand className='img-custom'  href="#home"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto custom-nav d-flex align-items-center text-decoration-none">
                    <NavLink className='m-2 text-decoration-none' to="/home">Home</NavLink>
                    <NavLink className='m-2 text-decoration-none' to='/login'>Login</NavLink>
                    {user?.email && <NavLink className='m-2 text-decoration-none' to='/ordermanage'>Manage Order</NavLink>
                    }
                    {user?.email && <NavLink className='m-2 text-decoration-none' to='/booked'>My Order</NavLink>
                    }
                    {user?.email &&<div className='m-2 d-flex align-items-center '> <h6 className='me-2'>{user.displayName}</h6> <Button onClick={logOut}>Logout</Button></div>
                    }
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </div>
    );
};

export default Header;