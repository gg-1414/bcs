import React, { useState } from 'react';
import { Input } from './input';

export const Signup = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const isFirstValid = firstName.trim().length > 0;
    const isLastValid = lastName.trim().length > 0;
    const isEmailValid = email.trim().length > 0;

    const isFormValid = isFirstValid && isLastValid && isEmailValid;

    return (
        <form name="newsletter" method="POST">
            <input type="hidden" name="form-name" value="newsletter" />
            <div className="form-row">
                <div className="col form-group">
                    <Input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                    />
                </div>
                <div className="col form-group">
                    <Input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="col form-group">
                    <Input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
            </div>
            <button type="submit" className="btn btn-light rounded-0 w-100 font-weight-bold" disabled={!isFormValid}>DUH</button>
        </form >
    )
};
