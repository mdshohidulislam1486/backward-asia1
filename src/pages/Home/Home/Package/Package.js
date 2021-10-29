import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Package = ({singlePackage}) => {

    const {name, img, description} =singlePackage
    return (
        <div class="">
            <div class="col">
                <div class="card h-100">
                    <img src={img} class="card-img-top" alt="tour pictures"/>
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{description.slice(0, 200)}<NavLink className='text-decoration-none' to="/serviceDetails"> -see more</NavLink></p>
                    </div>
                    <footer>
                        <Button>
                            Book Now
                        </Button>
                    </footer>
                </div>
           </div>
        </div>
    );
};

export default Package;