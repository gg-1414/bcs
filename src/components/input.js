import React from 'react';

export const Input = ({ type, name, value, onChange, placeholder }) => (
    <>
        <input
            style={{ 'background': 'black', 'border': '1px solid white', 'color': 'white' }}
            className="form-control"
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange} />
    </>
);
