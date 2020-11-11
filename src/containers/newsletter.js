import React from 'react';
import { Signup } from '../components/signup';

export const Newsletter = () => (
    <>
        <div className="d-block d-sm-none">
            <div className="d-flex flex-column justify-content-center align-items-center p-4">
                <h4>Wanna be on the list?</h4>
                <Signup />
            </div>
        </div>
        <div className="d-none d-sm-block">
            <div className="d-flex flex-column justify-content-center align-items-center p-3">
                <h4 className="p-2">Wanna be on the list?</h4>
                <Signup />
            </div>
        </div>
    </>
);
