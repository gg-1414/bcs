import React from 'react';
import { Signup } from '../components/signup';

export const Newsletter = () => (
    <>
        <div className="d-block d-sm-none">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <p>Sign up to get the latest news and updates</p>
                <Signup />
            </div>
        </div>
        <div className="d-none d-sm-block">
            <div className="d-flex flex-row justify-content-center align-items-center">
                <p className="mb-0 mr-3">Sign up to get the latest news and updates</p>
                <Signup />
            </div>
        </div>
    </>
);
