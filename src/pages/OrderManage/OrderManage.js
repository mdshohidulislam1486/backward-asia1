import React from 'react';
import { Button} from 'react-bootstrap';
import './OrderManage.css'

 

const OrderManage = (props) => {

 const {handleDelete, orders} = props
   
    return ( 

    <div className='m-3 custom-shadow text-center rounded p-3 '>
            <h3 className='text-light'>{orders?.package}</h3>
            <h6 className='text-light'>Booking id: {orders?._id}</h6>
            <p className='text-light'>Ordered by: {orders?.name}</p>
            <p className='text-light'>Start date: {orders?.startDate}</p>
            <div className='text-center text-light '><Button variant='success' onClick={()=>handleDelete(orders?._id)}>Delete Order</Button></div>

     </div>

    
    );
};

export default OrderManage;