import React, { useState, useEffect } from 'react';
import './LoginPage.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); 

    const handleLogin = async (e) => {
        e.preventDefault();
        
        // Example basic validation before making an API call
        if (!email || !password) {
            setErrorMessage("Please fill out all fields.");
            return;
        }

        try {
            // TODO: Add your API fetch request for authentication here
            console.log("Attempting login with:", email, password);
        } catch (error) {
            setErrorMessage("Invalid email or password. Please try again.");
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin} className="login-form">
                
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        id="email" 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter your email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        id="password" 
                        type="password" 
                        className="form-control" 
                        placeholder="Enter your password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>

      
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

                <button type="submit" className="btn btn-primary">Login</button>
            </form>

            <div className="register-redirect">
                <span>New here? </span>
                <a href="/register">Register Here</a>
            </div>
        </div>
    );
}

export default LoginPage;