import React from 'react';
import './Hotel.css';
import { Link } from 'react-router-dom';

function Hotel({ trip }) {
    const exchangeRate = 83;

    const convertToRupees = (priceInDollars) => {
        return (priceInDollars * exchangeRate).toFixed(2);
    };

    const formatPriceRange = (priceRangeInDollars) => {
        const [minPrice, maxPrice] = priceRangeInDollars.replace('$', '').split('-').map(Number);
        const minPriceInRupees = convertToRupees(minPrice);
        const maxPriceInRupees = convertToRupees(maxPrice);
        return `₹ ${minPriceInRupees} ` + ` per night`;
    };

    return (
        <div>
            <h1>Hotel Options</h1>
            <div className='hotel-container'>
                {trip?.hotelOptions?.map((hotel, index) => (
                    <Link key={index} to={'https://www.google.com/maps/search/?api=1&query=' + hotel.name + "," + hotel.address} target='_blank'>
                        <div key={index} className='HotelCard'>
                            <img src="https://images.unsplash.com/photo-1506059612708-99d6c258160e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="card-img" />
                            <div className='hotel-main'>
                                <h2 className='hotelName'>{hotel.name}</h2>
                                <p className='hotelAddress'>📍{hotel.address}</p>
                                <p className='hotelDescription'>{hotel.description}</p>
                                <p className='hotelPrice'>{formatPriceRange(hotel.price)}</p>
                                <p className='hotelRate'>{hotel.rating}⭐</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Hotel;
