import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const BookNow = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    const {user} = useAuth();

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

    const nameValue = currentBookings?.name
    const priceValue = currentBookings?.price

    return (
        <div className='container'>
            <div>
                <h2>{currentBookings?.name}</h2>
                <div><img src={currentBookings?.img} alt="" /> </div>
                <p>{currentBookings?.description}</p>
            </div>
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input value={user.displayName} {...register("name")} />
                <input value={user.email} {...register("email")} />
                <input placeholder="Billing Address" type='text' {...register("address")} />
                <input placeholder="Enter Phone number" type="number" {...register("phonenumber")} />
                <input placeholder='Tour Start from' type="date" {...register("startDate")} />
                <input defaultValue={nameValue} type='text' {...register("package")} />
                <input defaultValue={priceValue} type="number" {...register("price")} />
                <input placeholder="" type="submit" />
            </form>
            </div>
            

        </div>
    );
};

export default BookNow;