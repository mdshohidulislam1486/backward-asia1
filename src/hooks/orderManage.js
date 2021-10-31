import { useEffect } from "react";
import { useState } from "react"


const useProducts = () => {
    const [orderManage, setOrderManages] = useState([]);
    useEffect(() => {
        fetch('https://ghostly-crypt-13169.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrderManages(data));
    }, []);
    return [orderManage, setOrderManages];
}

export default useProducts;

