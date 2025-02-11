import React from 'react'
import Hero from '@/components/Custom/Hero'
import ContactForm from '@/components/Custom/ContactForm'

function Contact() {
    return (
        <>
            <Hero
                cName="hero-mid"
                heroImg="https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="CONTACT US"
                btnStyle="hide"
            />
            <ContactForm />
        </>
    )
}

export default Contact