import React from 'react'
import './Trip.css'
import Tripdata from './Tripdata'
import image13 from '../../assets/13.jpg'
import image14 from '../../assets/14.jpg'
import image15 from '../../assets/15.jpg'
function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover new location using Google Map</p>
            <div className="tripcard"><Tripdata
                image={image13}
                head=" Trip in London"
                text="A trip to London offers an unforgettable experience, blending historical grandeur with modern vibrancy. Begin your journey by exploring iconic landmarks like the majestic Tower of London and the grand Buckingham Palace. Stroll along the Thames to witness the striking London Eye and the awe-inspiring Houses of Parliament. Dive into cultural richness at the British Museum, marveling at ancient artifacts, or catch a world-class show in the West End. Wander through the charming streets of Covent Garden and Soho, savoring diverse cuisines and vibrant street performances. Don’t miss the serene beauty of Hyde Park or the trendy atmosphere of Shoreditch. With its rich history, dynamic culture, and endless attractions, London is a city that promises to captivate and enchant every traveler."
            />
                <Tripdata
                    image={image14}
                    head=" Trip in Paris"
                    text="A trip to Paris is an enchanting journey through a city renowned for its timeless charm and cultural richness. As you stroll along the Seine River, the majestic Eiffel Tower stands tall, offering breathtaking views of the cityscape. The Louvre, home to countless masterpieces including the Mona Lisa, invites you to explore its vast collection of art and history. Wander through the cobblestone streets of Montmartre, where vibrant cafés and bohemian vibes capture the essence of Parisian life. Indulge in delectable French pastries and cuisine at local bistros, and experience the romance of Paris as you relax in picturesque gardens like Luxembourg Gardens or the Tuileries. Whether you're captivated by the grandeur of historical landmarks or the allure of hidden gems, a Parisian adventure is a blend of sophistication and unforgettable memories."
                />
                <Tripdata
                    image={image15}
                    head=" Trip in Kashmir"
                    text="Kashmir, often referred to as Paradise on Earth,offers an unparalleled blend of natural beauty and cultural richness. Nestled in the northern part of the Indian subcontinent, this stunning region is renowned for its picturesque landscapes, characterized by lush green valleys, pristine lakes, and snow-capped mountains. A trip to Kashmir promises a tranquil escape with its serene Dal Lake, where visitors can enjoy a peaceful shikara ride, and the vibrant Mughal gardens that showcase exquisite floral displays. The local cuisine, rich in flavors and tradition, provides a delightful culinary experience. Whether you’re exploring the historic temples of Srinagar, taking a leisurely stroll through the meadows of Gulmarg, or savoring the local tea while surrounded by breathtaking vistas, Kashmir offers an unforgettable experience filled with natural splendor and warm hospitality."
                /></div>

        </div>
    )
}

export default Trip