import React from 'react';
import './WhyUsSingle.css'

const WhyUsSingle = ({whyData}) => {
    return (
        <div className="custom-width p-2">
            <h6 className='text-success'>{whyData.name}</h6>
            <p>{whyData.description}</p>
        </div>
    );
};

export default WhyUsSingle;