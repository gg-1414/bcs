import React from 'react';
import logo from '../assets/images/bcsglobewhite.png';

export const Nav = () => (
    <>
        <div className="d-block d-sm-none">
            <div className="d-flex justify-content-center p-4">
                <a href="https://www.bestcasescenario.nyc">
                    <img src={logo} alt="best case scenario" style={{ height: '50px' }} />
                </a>
            </div>
            {/* <div className="h-25 d-flex justify-content-around p-4">
                <h4 className="text-uppercase">Shop</h4>
                <h4 className="text-uppercase">About</h4>
                <h4 className="text-uppercase">Contact</h4>
            </div> */}
        </div>
        <div className="d-none d-sm-block ">
            <div className="d-flex justify-content-center p-4">
                <a href="https://www.bestcasescenario.nyc">
                    <img src={logo} alt="best case scenario" style={{ height: '75px' }} />
                </a>
            </div>
            {/* <div className="d-flex justify-content-end">
                <h4 className="text-uppercase mr-4">Shop</h4>
                <h4 className="text-uppercase mr-4">About</h4>
                <h4 className="text-uppercase">Contact</h4>
            </div> */}
        </div>
    </>
);
