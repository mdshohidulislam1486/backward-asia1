import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';
import './Booked.css'
import { useParams } from 'react-router';

 
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

},[myBookings])

let {id} = useParams();

const handleDelete =(id)=>{
  
    const result = window.confirm('Do you want to cancel the booking?')
    if(result){
        const url =`https://ghostly-crypt-13169.herokuapp.com/orders/${id}`
        fetch(url, {
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const remaining = myBooking?.filter(order => order._id !== id)
            setMYBooking(remaining)
        })
      
    } else{
       return
    }
   
}

    return (
        <div>
            <div className='d-flex '>

            {
                myBooking.map(onyOrder =><MyOrder
                key={onyOrder._id}
                handleDelete={()=>handleDelete()}
                onyOrder={onyOrder}
                ></MyOrder> )
            }
</div>
        </div>
    );
};

export default Booked;