import React from 'react';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Packages></Packages>
            <WhyUs></WhyUs>
        </div>
    );
};

export default Home;