import React, { useState } from 'react';
import './LogIn.css';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handleError, handleSuccess } from '../../util';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Login = ({ onAuthSuccess }) => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = loginData;

        if (!email || !password) {
            return handleError('All fields are required');
        }

        setLoading(true);

        try {
            const url = 'https://tripgenerator-3.onrender.com/api/auth/login';
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            });

            const result = await response.json();
            const { token, user, message, error } = result;

            if (token && user) {
                handleSuccess('Login successful!');
                localStorage.setItem('token', token);
                localStorage.setItem('loggedInUser', user.name);
                setTimeout(() => {
                    onAuthSuccess();
                    navigate('/');
                }, 1000);
            } else if (error) {
                handleError(error.details?.[0]?.message || 'Login error occurred');
            } else {
                handleError(message || 'Invalid credentials');
            }
        } catch (err) {
            handleError(err.message || 'Server error');
        } finally {
            setLoading(false);
        }
    };



    return (
        <div className="signup-page">
            <div className="signup-container">
                <h2>Welcome Back!</h2>
                <p>Please log in to your account</p>

                <form className="signup-form"
                    onSubmit={handleSubmit}
                >

                    <input type="email" placeholder="Email - dodo@gmail.com"
                        name="email"
                        value={loginData.email}
                        onChange={handleChange}
                    />

                    <input type="password" placeholder="Password - 565656"
                        name="password"
                        value={loginData.password}
                        onChange={handleChange}
                    />

                    <button type="submit"
                        disabled={loading} className="signup-button">
                        {loading ? <AiOutlineLoading3Quarters className='h-7 w-7 animate-spin' /> : 'Login '}
                    </button>

                    <span>
                        Don't have any account? <Link to="/signup">SignUp</Link>
                    </span>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
