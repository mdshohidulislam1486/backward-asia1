import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Package from '../Package/Package';


const Packages = () => {
     const [packages, setPackages] = useState([])

     useEffect(()=>{
         fetch('https://ghostly-crypt-13169.herokuapp.com/packages')
         .then(res => res.json())
         .then(data => setPackages(data))
     },[])

    return (
        <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                packages.map(singlePackage=> <Package
                key={singlePackage.key}
                singlePackage={singlePackage}
                ></Package>)
            }
        </div>
        </div>
    );
};

export default Packages;