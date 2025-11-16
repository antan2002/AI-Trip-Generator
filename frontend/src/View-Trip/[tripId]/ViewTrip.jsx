import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Infosec from '@/components/Custom/Infosec';
import Hotel from '@/components/Custom/Hotel';
import Itinerary from '@/components/Custom/Itinerary';
import './ViewTrip.css';

const ViewTrip = () => {
    const { tripId } = useParams();
    const [tripData, setTripData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTripData = async () => {
            try {
                const token = localStorage.getItem('token');
                console.log('=== ViewTrip Debug ===');
                console.log('Fetching trip with ID:', tripId);
                console.log('Token exists:', !!token);
                console.log('Token value:', token ? token.substring(0, 20) + '...' : 'null');

                if (!tripId) {
                    setError('No trip ID provided');
                    setLoading(false);
                    return;
                }

                const url = `https://tripgenerator-3.onrender.com/api/trips/${tripId}`;
                console.log('Request URL:', url);

                const response = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                console.log('Trip fetched successfully:', response.data);
                setTripData(response.data);
            } catch (err) {
                console.error('=== Error Details ===');
                console.error('Full error:', err);
                console.error('Status:', err.response?.status);
                console.error('Data:', err.response?.data);
                console.error('Message:', err.message);

                if (err.response?.status === 404) {
                    setError('Trip not found - the trip may have been deleted or ID is incorrect');
                } else if (err.response?.status === 401) {
                    setError('Unauthorized - please log in again');
                } else {
                    setError(`Error: ${err.response?.data?.message || err.message}`);
                }
            } finally {
                setLoading(false);
            }
        };

        if (tripId) {
            fetchTripData();
        }
    }, [tripId]);

    if (loading) return <div className="loader">Loading...</div>;
    if (error) return <div className="error">{error}</div>;
    if (!tripData) return <div className="error">No trip data available.</div>;

    return (
        <div className="view-trip">
            <Infosec trip={tripData} />
            <Hotel trip={tripData} />
            <Itinerary trip={tripData} />
        </div>
    );
};

export default ViewTrip;
