import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Infosec from '@/components/Custom/Infosec';
import './ViewTrip.css';
import Hotel from '@/components/Custom/Hotel';
import Itinerary from '@/components/Custom/Itinerary';

const ViewTrip = () => {
    const { tripID } = useParams();
    const [tripData, setTripData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTripData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/trip/${tripID}`);
                setTripData(response.data);
            } catch (err) {
                setError('Error fetching trip data');
            } finally {
                setLoading(false);
            }
        };

        fetchTripData();
    }, [tripID]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!tripData) return <div>No trip data found</div>;

    return (
        <div className="view-trip">
            <Infosec trip={tripData} />
            <Hotel trip={tripData} />
            <Itinerary trip={tripData} />
        </div>
    );
};

export default ViewTrip;
