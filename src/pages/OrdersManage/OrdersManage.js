import useProducts from '../../hooks/orderManage';
import OrderManage from '../OrderManage/OrderManage';

const OrdersManage = () => {

  /*   
    const [ordersManage, setOrderManages] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setOrderManages(data))
    },[]) */

    const [ordersManage, setOrdersManage] = useProducts()

    const handleDelete =id=>{
        const result = window.confirm('Do you want to cancel the booking?')
        if(result){
            const url =`http://localhost:5000/orders/${id}`
            fetch(url, {
                method:"DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = ordersManage?.filter(order => order._id !== id)
                setOrdersManage(remaining)
            })
          
        } else{
           return
        }
       
    }

    return (
        <div className='container d-flex flex-wrap justify-content-center align-items-center'>
            {
                ordersManage?.map(orders=> <OrderManage
                key={orders._id}
                handleDelete={()=>handleDelete(orders._id)}
                orders={orders}
                ></OrderManage>)
            }
        </div>
    );
};

export default OrdersManage;