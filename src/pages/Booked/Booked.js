import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './Booked.css'

const Booked = () => {
const {user}= useAuth()
const [myBookings, setMyBookings] =useState([])
const [myBooking, setMYBooking] =useState([])


useEffect(()=>{
    fetch('https://ghostly-crypt-13169.herokuapp.com/orders')
    .then(res => res.json())
    .then(data=> setMyBookings(data))
},[])

const myEmail = user.email

const filterMyOrder = ()=>{

}

useEffect(()=>{
    const updateBooking = myBookings.filter(myBooking => myBooking.email === myEmail )
    setMYBooking(updateBooking)

},[myBooking])


    return (
        <div className='custom-height'>
            <h2>{myBooking.length}</h2>
        </div>
    );
};

export default Booked;