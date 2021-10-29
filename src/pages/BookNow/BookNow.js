import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const BookNow = () => {

    let {id} = useParams();
    const [bookingDetails, setBookingDetails] = useState()
    const [currentBookings, setCurrentBooking] = useState({})
    useEffect(()=>{
        fetch('http://localhost:5000/packages')
        .then(res => res.json())
        .then(data => setBookingDetails(data))
    },[]);

    useEffect(()=>{
        const currentBookings  = bookingDetails?.find(currentBook=> currentBook.key === id)
        setCurrentBooking(currentBookings)

    },[bookingDetails])

    return (
        <div className='container'>
            <h2>{currentBookings?.name}</h2>
            <div><img src={currentBookings?.img} alt="" /> </div>
            <p>{currentBookings?.description}</p>
            

        </div>
    );
};

export default BookNow;