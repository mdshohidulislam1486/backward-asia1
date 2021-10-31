import React from 'react';
import WhyUsSingle from '../WhyUsSingle/WhyUsSingle';

const whyUsdata = [
    {name:'TINY GROUPS', description:"Personalized experience on every tour with us. 5 Travelers per group maximum. Private tours are also available."},
    {name:'LOWER PRICE', description:"Compared to any of your home operators. Book directly & cut the middleman. Save money, travel more.."},
    {name:'SCHEDULED TOURS ', description:"Regularly scheduled tours. Suitable for solo travelers to join and reduce cost. Single Supplement also available"},
    {name:'HIGHEST QUALITY', description:"350+ reviews & 5/5 rating on TripAdvisor. Awarded Certificate of Excellence in 2015, 2016, 2017, 2018 & 2019 consecutively."},
    {name:'LOCAL EXPERIENCE', description:"Experienced local guides with vast local knowledge. Have an authentic local experience focusing on people & culture."},
    {name:'LOCAL COMPANY', description:"100% Of your money spent goes directly to the locals. No commission to the foreign agencies online or offline."},
]

const WhyUs = () => {
    return (
        <div className='container my-5 '>
            <div className='d-flex flex-wrap justify-content-center text-center '>
            {
                whyUsdata.map(whyData =><WhyUsSingle
                key={whyData.name}
                whyData={whyData}
                >
                </WhyUsSingle> )
            }
          </div>
        </div>
    );
};

export default WhyUs;