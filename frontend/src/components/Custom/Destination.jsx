import React from 'react';
import './Destination.css';
import DestinationData from './DestinationData';
import imageOne from '../../assets/4.jpg';
import imageTwo from '../../assets/5.jpg';
import imageThree from '../../assets/6.jpg';
import imageFour from '../../assets/8.jpg';
function Destination() {
    return (
        <>

            <div className='destination'>
                <h1>Tailored Trip Planner</h1>
                <p> Say goodbye to endless hours of searching for the ideal trip.Our cutting-edge AI technology crafts personalized itineraries based on your preferences, interests, and budget.
                </p>
                <div className="first-desc">
                    <div className="des-text">
                        <h2>Get to know Trips</h2>
                        <p>An AI trip generator is designed to create personalized travel itineraries by analyzing user preferences and input. It collects data on potential destinations, including attractions, accommodations, and local events, and matches this information with the user's interests, budget, and travel requirements. The AI then generates a tailored itinerary, optimizing it for factors like time and cost, and ensuring it aligns with the user's desired experience, whether it's adventure, relaxation, or cultural exploration. The system can also adapt to real-time updates, such as travel restrictions or local events, providing a dynamic and customized travel plan.</p>
                    </div>
                    <div className="image">
                        <div className="slider">
                            <img src={imageOne} alt="Destination 1" />
                            <img src={imageTwo} alt="Destination 2" />
                            <img src={imageThree} alt="Destination 3" />
                            <img src={imageFour} alt="Destination 4" />
                        </div>
                    </div>
                </div>
                <h1>Some Populars Destination</h1>
                <p>Tours give you the opportunity to see a lot, within a time frame</p>
                <DestinationData
                    className="desc"
                    heading="GOA"
                    text="For a Goa trip, the AI trip generator suggests a 5-day itinerary filled with the perfect blend of relaxation and adventure. Begin with a visit to the serene beaches of North Goa, such as Baga and Anjuna, where you can unwind and enjoy water sports. Explore the vibrant local markets like the Anjuna Flea Market, followed by a visit to the historic Aguada Fort and the iconic Basilica of Bom Jesus in Old Goa. Savor Goan cuisine at local shacks and dine at popular spots in Panaji. The trip also includes a day of beach-hopping in South Goa, visiting Palolem and Colva beaches, and indulging in sunset cruises or yoga sessions."
                    image1="https://plus.unsplash.com/premium_photo-1697729594707-0fc9e51c8eed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    image2="https://plus.unsplash.com/premium_photo-1697730390320-8412ee5eae82?q=80&w=2045&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <DestinationData
                    className="desc-reverse"
                    heading="Thailand"
                    text="Your AI-generated Thailand trip offers a perfect blend of cultural exploration, relaxation, and adventure. Start in bustling Bangkok, where you’ll visit iconic temples like Wat Pho and the Grand Palace, followed by a street food tour in vibrant markets. Next, unwind on the pristine beaches of Phuket, enjoying water sports or a boat tour of the stunning Phi Phi Islands. Head north to Chiang Mai for a more serene experience, with visits to elephant sanctuaries and traditional Thai cooking classes. Your itinerary is optimized for seamless travel, with curated accommodations and dining options that fit your budget and preferences, ensuring a memorable and personalized Thailand adventure."
                    image1="https://images.unsplash.com/photo-1534008897995-27a23e859048?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    image2="https://images.unsplash.com/photo-1519915247718-1703f9c6bb15?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
        </>
    );
}

export default Destination;
