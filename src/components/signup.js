import React, { useState } from 'react';
import { Input } from './input';

export const Signup = () => {
    const [email, setEmail] = useState('');
    return (
        <form>
            <div className="d-flex flex-row">
                <Input
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <button type="submit" className="btn btn-light rounded-0 ml-2">JOIN</button>
            </div>
        </form>
    )
};
