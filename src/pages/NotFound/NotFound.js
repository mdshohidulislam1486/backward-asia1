import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h2>This page is not found </h2>
            <NavLink to='/home'><Button>Go HOme</Button></NavLink>
        </div>
    );
};

export default NotFound;