import React from 'react'
import Hero from '@/components/Custom/Hero'
import Aboutus from '@/components/Custom/Aboutus'
function About() {
    return (
        <>
            <Hero
                cName="hero-mid"
                heroImg="https://images.unsplash.com/photo-1642840893159-75c47f41e01c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title=" ABOUT"
                btnStyle="hide"
            />
            <Aboutus />
        </>
    )
}

export default About