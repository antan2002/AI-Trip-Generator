import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero({ cName, heroImg, title, text, url, btnStyle, btnName }) {
    return (
        <div className={cName}>
            <img src={heroImg} className='hero-img' alt="hero-img" />
            <div className="hero-text">
                <h1>{title}</h1>
                <p>{text}</p>
                <Link to={url} className={btnStyle}>{btnName}</Link>
            </div>
        </div>
    );
}

export default Hero;
