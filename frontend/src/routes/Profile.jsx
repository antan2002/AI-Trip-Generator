import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TripCard from '../components/Custom/TripCard';
import Hero from '@/components/Custom/Hero';
import './Profile.css';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function Profile() {
    const [trips, setTrips] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState('');
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const tripsPerPage = 6;

    // Fetch trips for the logged-in user
    useEffect(() => {
        const fetchTrips = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                console.warn('No token found. Please login.');
                return;
            }

            try {
                setLoading(true);
                const response = await axios.get('https://tripgenerator-3.onrender.com/api/trips', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setTrips(response.data);
            } catch (error) {
                console.error('Error fetching trips:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTrips();
    }, []);

    // Set username
    useEffect(() => {
        const user = localStorage.getItem('loggedInUser');
        setLoggedInUser(user || 'Guest');
    }, []);

    // Pagination logic
    const indexOfLastTrip = currentPage * tripsPerPage;
    const indexOfFirstTrip = indexOfLastTrip - tripsPerPage;
    const currentTrips = trips.slice(indexOfFirstTrip, indexOfLastTrip);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <Hero
                cName="hero-mid"
                heroImg="https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2070&auto=format&fit=crop"
                title={`Welcome to Your Profile - ${loggedInUser}`}
                btnStyle="hide"
            />

            <div className="profile-container">
                <div className="trip-cards-container">
                    {loading ? (
                        <AiOutlineLoading3Quarters className='h-7 w-7 animate-spin' />
                    ) : currentTrips.length > 0 ? (
                        currentTrips.map((trip) => (
                            <TripCard key={trip._id} trip={trip} />
                        ))
                    ) : (
                        <p>No trips found.</p>
                    )}
                </div>

                {/* Pagination Controls */}
                <div className="pagination">
                    {Array.from({ length: Math.ceil(trips.length / tripsPerPage) }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => paginate(index + 1)}
                            className={currentPage === index + 1 ? 'active' : ''}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Profile;
