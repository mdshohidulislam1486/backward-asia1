import React, { useEffect, useState } from 'react';

const OrderManage = () => {
    const [ordersManage, setOrderManages] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setOrderManages(data))
    },[])

    return (
        <div>
            <h2>{ordersManage?.length}</h2>
            
        </div>
    );
};

export default OrderManage;