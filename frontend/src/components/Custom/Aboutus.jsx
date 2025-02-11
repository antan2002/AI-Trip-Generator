import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import './Aboutus.css';
import face2 from "../../assets/face2.jpg";
import face3 from "../../assets/face3.jpg";
import { TbArrowWaveRightUp } from "react-icons/tb";

const Aboutus = () => {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FaStar key={i} className={`star ${i <= rating ? 'filled' : 'unfilled'}`} />
            );
        }
        return stars;
    };

    return (
        <div className="about-container">
            <h1>Our History</h1>
            <p>The history of trip generators traces back to manual travel planning, where individuals relied on guidebooks and travel agencies. The late 1990s and early 2000s marked a shift with online travel agencies like Expedia simplifying booking but still requiring manual itinerary creation. The 2010s introduced recommendation systems that offered personalized suggestions based on user preferences. Today, AI-powered trip generators utilize advanced algorithms and machine learning to create highly customized travel plans, adapting to real-time data and user feedback for a more dynamic and interactive travel planning experience.</p>
            <div className="bttn-container">
                <Link to="/contact" className="center-button">Learn More <TbArrowWaveRightUp /></Link>
            </div>
            <section className="testimonial-section">
                <h2>What Client Say About Us</h2>
                <div className="testimonial-container">
                    <div className="testimonial-card">
                        <img src={face3} alt="Andrew Simon" className="testimonial-img" />
                        <h3>Andrew Simon</h3>
                        <p>Traveller</p>
                        <blockquote>
                            “A home that perfectly blends sustainability with luxury until discovered Ecoland Residence. The moment I stepped community, I knew it was where I wanted to live.”
                        </blockquote>
                        <div className="rating">
                            {renderStars(4)}
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <img src={face2} alt="Maria Doe" className="testimonial-img" />
                        <h3>Maria Doe</h3>
                        <p>Traveller</p>
                        <blockquote>
                            “The home boasts sleek, contemporary architecture with clean lines and expansive windows, allowing natural light to flood the interiors. It incorporates passive design principles.”
                        </blockquote>
                        <div className="rating">
                            {renderStars(5)}
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <img src={face3} alt="Angelina Rose" className="testimonial-img" />
                        <h3>Angelina Rose</h3>
                        <p>Traveller</p>
                        <blockquote>
                            “Solar panels adorn the roof, harnessing renewable energy to power the home and even feed excess electricity back into the grid. High-performance insulation and triple-glazed.”
                        </blockquote>
                        <div className="rating">
                            {renderStars(3)}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Aboutus;
