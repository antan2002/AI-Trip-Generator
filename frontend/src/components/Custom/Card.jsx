import React from 'react';
import './Card.css';
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Card({ data, title }) {
    return (
        <div className="card">
            <img className='card-img' src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="places img" />
            <h2 className="card-title">{title}</h2>
            <h3 className="card-subtitle">{data.name}</h3>
            <p className="card-text"><span className='span'>Details: </span>{data.details}</p>
            <p className="card-text"><span className='span'>Ticket Price: </span>{data.ticketPricing}</p>
            <p className="card-text"><span className='span'>Ratings: </span>{data.rating}⭐</p>
            <p className="card-text"><span className='span'>Time: </span>{data.time}</p>
            <Link to={'https://www.google.com/maps/search/?api=1&query=' + data.name + "," + data.
                geoCoordinates
            } target='_blank'>
                <button className='btn-locate'><FaLocationDot /></button>
            </Link>
        </div>
    );
}

export default Card;
