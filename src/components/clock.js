import React from 'react';

export const Clock = ({ days, hours, minutes, seconds }) => (
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
);