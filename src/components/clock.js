import React from 'react';

export const Clock = ({ days, hours, minutes, seconds }) => (
    <>
        <div className="d-block d-sm-none">
            <div className="d-flex flex-row justify-content-center">
                <div className="d-flex flex-column align-items-center m-3">
                    <p>Days</p>
                    <h4>{days}</h4>
                </div>
                <div className="d-flex flex-column align-items-center m-3">
                    <p>Hours</p>
                    <h4>{hours}</h4>
                </div>
                <div className="d-flex flex-column align-items-center m-3">
                    <p>Minutes</p>
                    <h4>{minutes}</h4>
                </div>
                <div className="d-flex flex-column align-items-center m-3">
                    <p>Seconds</p>
                    <h4>{seconds}</h4>
                </div>
            </div>
        </div>

        <div className="d-none d-sm-block">
            <div className="d-flex flex-row justify-content-center">
                <div className="d-flex flex-column align-items-center m-3">
                    <h4>Days</h4>
                    <h3>{days}</h3>
                </div>
                <div className="d-flex flex-column align-items-center m-3">
                    <h4>Hours</h4>
                    <h3>{hours}</h3>
                </div>
                <div className="d-flex flex-column align-items-center m-3">
                    <h4>Minutes</h4>
                    <h3>{minutes}</h3>
                </div>
                <div className="d-flex flex-column align-items-center m-3">
                    <h4>Seconds</h4>
                    <h3>{seconds}</h3>
                </div>
            </div>
        </div>
    </>
);