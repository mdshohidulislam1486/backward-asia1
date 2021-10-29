import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faShareAlt, faHeart} from '@fortawesome/free-solid-svg-icons'
import './Packate.css'

const Package = ({singlePackage}) => {

     
    const {name, img, description, price} =singlePackage
    return (
        <div class="">
            <div class="col">
                <div class="card h-100">
                    <img src={img} class="card-img-top" alt="tour pictures"/>
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p className='text-danger'>Single pax ${price}<small> US</small></p>
                        <p class="card-text">{description.slice(0, 200)}<NavLink className='text-decoration-none' to="/serviceDetails"> -see more</NavLink></p>
                    </div>
                    <footer className='d-flex justify-content-around align-items-center mb-2'>
                        <Button>Book Now</Button>
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