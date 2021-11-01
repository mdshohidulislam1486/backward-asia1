import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const BookNow = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://ghostly-crypt-13169.herokuapp.com/orders', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Your booking is confirmed')
                reset()
            }
        console.log(res)
        })
        
    };
    const {user} = useAuth();

    let {id} = useParams();
    const [bookingDetails, setBookingDetails] = useState()
    const [currentBookings, setCurrentBooking] = useState({})
    useEffect(()=>{
        fetch('https://ghostly-crypt-13169.herokuapp.com/packages')
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
                <input placeholder="Billing Address" type='text' {...register("address")} required />
                <input placeholder="Enter Phone number" type="number" {...register("phonenumber")} required />
                <input placeholder='Tour Start from' type="date" {...register("startDate")} required />
                <input defaultValue={nameValue} type='text' {...register("package")}  required/>
                <input defaultValue={priceValue} type="number" {...register("price")} />
                <input placeholder="" type="submit" />
            </form>
            </div>
            

        </div>
    );
};

export default BookNow;