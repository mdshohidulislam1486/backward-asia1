import React from 'react';
import { Button} from 'react-bootstrap';
import './OrderManage.css'



const OrderManage = (props) => {

 const {handleDelete, orders} = props
   
    return (

    <div className='m-3 custom-shadow text-center rounded p-3'>
            <h3>{orders?.package}</h3>
            <p>$ {orders?.price} us</p>
            <h6>Booking id: {orders?._id}</h6>
            <p>Ordered by: {orders?.name}</p>
            <p>Start date: {orders?.startDate}</p>
            <div className='text-center'><Button onClick={()=>handleDelete(orders?._id)}>Delete Order</Button></div>

     </div>

    
    );
};

export default OrderManage;