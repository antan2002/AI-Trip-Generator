import React from 'react';
import './Itinerary.css';
import Card from '../Custom/Card';

function Itinerary({ trip }) {
    return (
        <div className="itinerary-container">
            <h2 className="itinerary-title">Places To Visit</h2>
            <div className="itinerary-list">
                {trip?.itinerary && Object.keys(trip.itinerary).map((key) => (
                    <Card key={key} data={trip.itinerary[key]} title={key} />
                ))}
            </div>
        </div>
    );
}

export default Itinerary;
