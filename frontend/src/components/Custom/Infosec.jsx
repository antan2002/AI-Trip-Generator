import React, { useEffect } from 'react';
import './Infosec.css';
import { CgShare } from "react-icons/cg";

function Infosec({ trip }) {

    const startDateString = trip.startDate;
    const startDate = new Date(startDateString).toLocaleDateString();

    const endDateString = trip.endDate;
    const endDate = new Date(endDateString).toLocaleDateString();

    return (
        <div className="infosec-container">
            <img
                src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="information"
                className="infosec-image"
            />
            <div className="infosec-content">
                <div className="infosec-header">
                    <h2 className="infosec-location">{trip.location}</h2>
                </div>
                <div className="infosec-details-container">
                    <div className="infosec-details">
                        <div className="infosec-detail">

                            <p>Start Date:</p>
                            📅
                            <h2> {startDate}</h2>
                        </div>
                        <div className="infosec-detail">

                            <p>End Date:</p>
                            📅
                            <h2> {endDate}</h2>
                        </div>
                        <div className="infosec-detail">
                            <p>Budget:</p>
                            💸
                            <h2>{trip.budget}</h2>
                        </div>
                        <div className="infosec-detail">
                            <p>Traveler:</p>
                            🫂
                            <h2> {trip.traveler}</h2>
                        </div>
                    </div>
                    <button className="infosec-share-button">
                        <CgShare />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Infosec;
