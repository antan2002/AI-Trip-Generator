import ContactForm from '@/components/Custom/ContactForm';
import Destination from '@/components/Custom/Destination';
import Hero from '@/components/Custom/Hero';
import Trip from '@/components/Custom/Trip';
import React from 'react';

function Home() {
    return (
        <>
            <Hero
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1632979502967-49e849105521?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Plan Smarter, Travel Better"
                text="Say goodbye to endless hours of searching for the ideal trip. Our cutting-edge AI technology crafts personalized itineraries based on your preferences, interests, and budget."
                btnName="Get Started"
                url="/service"
                btnStyle="show"
            />
            <Destination />
            <Trip />
            <ContactForm />
        </>
    );
}

export default Home;
