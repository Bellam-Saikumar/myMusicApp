import React, { useState } from 'react';
import '../index.css'; 
import { Navbar } from './Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate()
   
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', {email, password})
        .then(result => {console.log(result)
            if(result.data === "Success"){
                navigate('/PlayList')
            }
            else{
                alert('Enter correct Email and Password');
            }
    })
    .catch(err => console.log(err));
    };

    return (
        <>
            <Navbar />
            <div className="register-container">
                <form id="form" name="form" onSubmit={handleSubmit}>
                    <h2 style={{ textAlign: 'center', color:"black" }} >Login</h2>
                    <div className="form-control">
                        <label htmlFor="emailid">Email Id</label>
                        <input
                            type="text"
                            id="emailid"
                            name="email"
                            placeholder="Enter EmailId"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <small>Error message</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <small>Error message</small>
                    </div>
                    <button type="submit">Login</button>
                </form>
                    <p>Don't Have an Account? <span><a href="/register">Register</a></span></p>
            </div>
                    
        </>
    );
};

export { LoginForm };
