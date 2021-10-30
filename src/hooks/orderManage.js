import { useEffect } from "react";
import { useState } from "react"


const useProducts = () => {
    const [orderManage, setOrderManages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrderManages(data));
    }, []);
    return [orderManage, setOrderManages];
}

export default useProducts;

