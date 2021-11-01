import React from 'react';
const Footer = () => {
    return (
        <div className='container-fluid bg-warning'>
            <div className='d-flex  justify-content-between flex-sm-row flex-column container pt-2'>
                <div>
                    <p>Contact us</p>
                    <p>Email: info@backwardasia.com</p>
                    <p>Address: Alamin Islam Bhaban Dhaka 1000</p>
                </div>
                <div className='d-flex flex-column justify-content-between '>
                    <h3>Backward Asia</h3>
                    <p>© Backward Asia 2021</p>
                </div>
                <div>
                    <p>Find us </p>
                    <p>Facebook <i className="fab fa-facebook"></i></p>
                    <p>Instagram  <i className="fab fa-instagram-square"></i></p>
                </div>
                
            </div>
        </div>
    );
};

export default Footer;