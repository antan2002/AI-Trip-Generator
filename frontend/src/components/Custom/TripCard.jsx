import React from 'react';
import './TripCard.css';

function TripCard({ trip, onClick }) {
    return (
        <div className="trip-card" onClick={onClick}>
            <div className="hotel-options">
                <h1 className="trip-location">{trip.location}</h1>
                <div className="trip-details">
                    <p><strong>Start Date:</strong> {new Date(trip.startDate).toLocaleDateString()}</p>
                    <p><strong>End Date:</strong> {new Date(trip.endDate).toLocaleDateString()}</p>
                    <p><strong>Budget:</strong> {trip.budget}</p>
                    <p><strong>Traveler:</strong> {trip.traveler}</p>
                </div>
                <h2>Hotel Options:</h2>
                {trip?.hotelOptions?.map((hotel, index) => (
                    <div key={index} className="hotel-card">
                        <img
                            src="https://images.unsplash.com/photo-1506059612708-99d6c258160e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Hotel"
                        />
                        <div className="hotel-main">
                            <h3 className="hotel-name">{hotel.name}</h3>
                            <p className="hotel-address">📍{hotel.address}</p>
                            <p className="hotel-description">{hotel.description}</p>
                            <p className="hotel-rate">{hotel.rating}⭐</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TripCard;
