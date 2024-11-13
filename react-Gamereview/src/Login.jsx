import React, { useState } from 'react';
import Reviews from './Reviews';

export default function Login({ onLoginSuccess }) {
    const accounts = [
        {username: "admin", password: "admin", role: "admin"},
        {username: "user", password: "user123", role: "user"},
    ];

    const [enteredUsernames, setEnteredUsernames] = useState("");
    const [enteredPasswords, setEnteredPasswords] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setRole] = useState("");
    const [error, setError] = useState("");
    const [user, setUser] = useState(null);

    const getUserName = (event) => {
        setEnteredUsernames(event.target.value);
    };

    const getPassword = (event) => {
        setEnteredPasswords(event.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        const userAccount = accounts.find(
            (account) =>
                account.username === enteredUsernames &&
                account.password === enteredPasswords
        );

        if (userAccount){
            setIsLoggedIn(true);
            setRole(userAccount.role);
            setUser(userAccount); 
            onLoginSuccess(userAccount); 
        } 
        else{
            setError("Invalid credentials, please try again.");
        }
    };

    const renderLoginForm = () => (
        <div>
            <h1>Welcome to Wormmmy's Reviews!</h1>
            <h4>Login to Continue:</h4>
            <input
                type="text"
                placeholder="Username"
                value={enteredUsernames}
                onChange={getUserName}
            />
            <br />
            <input
                type="password"
                placeholder="Password"
                value={enteredPasswords}
                onChange={getPassword}
            />  
            <br />
            {error && <p className="error-message">{error}</p>}
            <button onClick={handleLogin}>Login</button>
        </div>
    );

    const renderWelcomeMessage = () => (
        <div>
            <h2>Welcome, {user.username}!</h2>
            {role === "user" ? <Reviews /> : <div>Welcome Admin! Admin Panel.</div>}
        </div>
    );

    return (
        <div className="login-panel">
            {isLoggedIn ? renderWelcomeMessage() : renderLoginForm()}
        </div>
    );
}
