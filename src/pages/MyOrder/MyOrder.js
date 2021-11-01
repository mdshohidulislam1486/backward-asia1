
import React from 'react';
import { Button} from 'react-bootstrap';




const MyOrder = (props) => {
    const {handleDelete, onyOrder} = props
    return (
        
    <div className='m-3 custom-shadow text-center rounded p-3 '>
        <h3 className='text-light'>{onyOrder?.package}</h3>
        <h6 className='text-light'>Booking id: {onyOrder?._id}</h6>
        <p className='text-light'>Ordered by: {onyOrder?.name}</p>
        <p className='text-light'>Start date: {onyOrder?.startDate}</p>
        <div className='text-center text-light '><Button variant='success' onClick={()=>handleDelete(onyOrder?._id)}>Delete Order</Button></div>

 </div>
    );
};

export default MyOrder;