import React from 'react';

export const Nav = () => (
    <>
        <div className="d-block d-sm-none">
            <div className="h-25 d-flex justify-content-around p-4">
                <h4 className="text-uppercase">Shop</h4>
                <h4 className="text-uppercase">About</h4>
                <h4 className="text-uppercase">Contact</h4>
            </div>
        </div>
        <div className="d-none d-sm-block">
            <div className="h-25 d-flex justify-content-end p-4">
                <h4 className="text-uppercase mr-4">Shop</h4>
                <h4 className="text-uppercase mr-4">About</h4>
                <h4 className="text-uppercase">Contact</h4>
            </div>
        </div>
    </>
);
