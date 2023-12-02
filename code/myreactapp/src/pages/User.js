import React, { useState, useCallback } from 'react';
import { useNavigate } from "react-router-dom";


const User = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("Default email");
    const [password, setPassword] = useState("Default password");

    const handleLogin = () => {
        if (email === 'Default email') {
            alert("Please enter a valid email.")
        } else if (password === "Default password") {
            alert("Please enter a valid password.")
        } else {
            login();
        }
    }
    const login = async () => {
        let reponse = fetch("http://localhost:8081/api/v1/user/registered/", {
            method: "POST",
            body: JSON.stringify(email, "&", password)
        }).then((response) => {
            if (reponse.status === 'false') {
                throw new Error('Incorrect Email and/ or Password');
            } else {
                sessionStorage.setItem("email", email);
                sessionStorage.setItem('isLoggedIn', "true");
                navigate('/User');
                return response.json()
            }
        })
            .then((data) => {
                console.log(data)
                sessionStorage.setItem("userId", data.id); // Add userId to sessionStorage, which is used for many purposes
                sessionStorage.setItem("firstName", data.name); // Storages name in sessionStorage for display in Header
                window.location.reload();
            })
            .catch((error) => {
                alert(error)
            });
    }

    const updateEmail = (e) => {
        setEmail(e.target.value);
    }

    const updatePassword = (e) => {
        setPassword(e.target.value);
    }
    return (
        <div className="login">
            <div>
                <h1>Login</h1>
                <div className="login">
                    <p>Please login if you are a registered user:</p>
                    <label htmlFor="email">Email Address</label><br></br>
                    <input id="email" type="user" onChange={updateEmail} placeholder='Email' />
                    <br />
                    <label htmlFor="password">Password</label><br></br>
                    <input id="password" type="password" onChange={updatePassword} placeholder='Password' />
                    <button id="login" type="button" onClick={() => handleLogin()} >Login</button>
                </div>
            </div>
        </div>

    )
};


export default User;
