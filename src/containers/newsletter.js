import React from 'react';
import { Signup } from '../components/signup';

export const Newsletter = () => (
    <>
        <div className="d-block d-sm-none">
            <div className="d-flex flex-column justify-content-center align-items-center mobile-form pt-3 pb-3">
                <p>Wanna be on the list?</p>
                <Signup />
            </div>
        </div>
        <div className="d-none d-sm-block">
            <div className="d-flex justify-content-center align-items-center">
                <div className="card border-0 bg-transparent" style={{ width: '28rem' }}>
                    <div className="card-body">
                        <center><p className="card-title" style={{ fontSize: '20px' }}>Wanna be on the list?</p></center>
                        <Signup />
                    </div>
                </div>
            </div>
        </div>
    </>
);
