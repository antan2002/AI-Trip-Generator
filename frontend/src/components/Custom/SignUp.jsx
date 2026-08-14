import React, { useState } from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../../util';
import { BACKEND_URL } from '../../Service/config';
const SignUp = ({ onAuthSuccess }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = formData;
        if (!name || !email || !password) {
            return handleError('all sections are required')
        }
        try {
            const url = `${BACKEND_URL}/api/auth/signup`
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const result = await response.json();
            const { success, message, error, token, user } = result;
            if (success) {
                handleSuccess(message);
                if (token) {
                    localStorage.setItem('token', token);
                    localStorage.setItem('loggedInUser', user?.name || name);
                }
                setTimeout(() => {
                    onAuthSuccess();
                    navigate('/')
                }, 1000)
            } else if (error) {
                const details = typeof error === 'string' ? error : error?.details?.[0]?.message;
                handleError(details || 'An error occurred. Please try again.')
            } else {
                handleError(message);
            }
        } catch (err) {
            handleError(err)
        }
    }
    return (
        <div className="signup-page">
            <div className="signup-container">
                <h2>Create an Account</h2>
                <form className="signup-form"
                    onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange} />

                    <input type="email" placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange} />

                    <input type="password" placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange} />

                    <button type="submit" className="signup-button">Sign Up</button>
                    <span>
                        Already have an account? <Link to="/login">LogIn</Link>
                    </span>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;
