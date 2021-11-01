import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faShareAlt, faHeart} from '@fortawesome/free-solid-svg-icons'
import './Packate.css'

const Package = ({singlePackage}) => {

     
    const {name, img, description, price} =singlePackage
    return (
        <div className="">
            <div className="col">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="tour pictures"/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className='text-danger'>Single pax ${price}<small> US</small></p>
                        <p className="card-text">{description.slice(0, 200)}<NavLink className='text-decoration-none' to="/serviceDetails"> -see more</NavLink></p>
                    </div>
                    <footer className='d-flex justify-content-around align-items-center mb-2'>
                        <NavLink to={`/booking/${singlePackage.key}`}><Button variant='success'>Book Now</Button></NavLink>
                        <div className="text-warning cursor-custom">
                            <FontAwesomeIcon className='me-2' icon={faShoppingCart}/>
                            <FontAwesomeIcon className='me-2' icon={faShareAlt}/>
                            <FontAwesomeIcon icon={faHeart}/>
                        </div>
                    </footer>
                </div>
           </div>
        </div>
    );
};

export default Package;