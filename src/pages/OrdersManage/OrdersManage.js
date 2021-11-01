import useProducts from '../../hooks/orderManage';
import OrderManage from '../OrderManage/OrderManage';
import './OrdersManage.css'

const OrdersManage = () => {
 
    const [ordersManage, setOrdersManage] = useProducts()

    const handleDelete =id=>{
        const result = window.confirm('Do you want to cancel the booking?')
        if(result){
            const url =`https://ghostly-crypt-13169.herokuapp.com/orders/${id}`
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
        <div className='container d-flex flex-wrap justify-content-center align-items-center custom-order-css'>
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