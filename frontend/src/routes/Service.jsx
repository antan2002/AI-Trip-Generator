import React from 'react'
import Hero from '@/components/Custom/Hero'
import CreateTrip from '@/create-trip/CreateTrip'
import { Toaster } from '../components/ui/sonner'
function Service() {
    return (
        <>
            <Hero
                cName="hero-mid"
                heroImg="https://plus.unsplash.com/premium_photo-1663088923485-58685ba14d5f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title=" Plan Your Trip"
                btnStyle="hide"
            />
            <Toaster />
            <CreateTrip />
        </>
    )
}

export default Service