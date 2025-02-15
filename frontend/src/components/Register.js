import React, { useState } from 'react';
import '../index.css';
import { Navbar } from './Navbar'; 
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
       

        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                
                console.log(result);
                alert('Registration successful! Redirecting to login...');
                navigate('/login');
            })
            .catch(err => {
                console.error(err);
            });
    };

    return (
        <>
            <Navbar />
            <div className="register-container">
                <form id="form" name="form" onSubmit={handleSubmit}>
                    <h2 style={{ color: "black" }}>Register With Us</h2>
                    
                    <div className="form-control">
                        <label htmlFor="name">Username</label>
                        <input type="text" id="name" placeholder="Enter username" 
                            name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                        <small>Error message</small>
                    </div>
                    
                    <div className="form-control">
                        <label htmlFor="email">Email Id</label>
                        <input type="text" id="email" placeholder="Enter EmailId" 
                            name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <small>Error message</small>
                    </div>
                    
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter Password" 
                            name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <small>Error message</small>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};

export { RegisterForm };
