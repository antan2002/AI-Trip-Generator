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
            return handleError('all sections are required')
        }
        setLoading(true);
        try {
            const url = 'http://localhost:8080/trip/login'
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(loginData)
            })
            const result = await response.json();
            const { success, message, jwtToken, name, error } = result;
            if (success) {
                handleSuccess(message);
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('loggedInUser', name);
                setTimeout(() => {
                    navigate('/')
                    onAuthSuccess();
                }, 1000)
                setLoading(false);
            } else if (error) {
                const details = error?.details[0].message;
                handleError(details || 'An error occurred. Please try again.')
            } else if (!success) {
                handleError(message);
            }
        } catch (err) {
            handleError(err)
        }
    }


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
