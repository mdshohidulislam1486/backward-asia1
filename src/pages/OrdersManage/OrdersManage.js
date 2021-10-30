import React, { useEffect, useState } from 'react';
import OrderManage from '../OrderManage/OrderManage';

const OrdersManage = () => {
    const [ordersManage, setOrderManages] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setOrderManages(data))
    },[])

    return (
        <div className='container d-flex flex-wrap justify-content-center align-items-center'>
            {
                ordersManage.map(orders=> <OrderManage
                key={orders._id}
                orders={orders}
                ></OrderManage>)
            }
        </div>
    );
};

export default OrdersManage;