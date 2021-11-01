import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';
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

useEffect(()=>{
    const updateBooking = myBookings.filter(myBooking => myBooking.email === myEmail )
    setMYBooking(updateBooking)

},[myBooking])


    return (
        <div className='custom-height'>
            <h2>{myBooking.length}</h2>

            {
                myBooking.map(onyOrder =><MyOrder
                key={onyOrder._id}
                onyOrder={onyOrder}
                ></MyOrder> )
            }
        </div>
    );
};

export default Booked;