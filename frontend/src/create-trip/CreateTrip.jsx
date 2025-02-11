import React, { useEffect, useState } from 'react';
import './CreateTrip.css';
import { toast } from "sonner";
import { AI_PROMPT, selectBudgetOptions, selectTravelLists } from '../Constant/Options';
import { chatSession } from '@/Service/AIModel';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';

function CreateTrip() {
    const initialFormData = {
        location: '',
        startDate: null,
        endDate: null,
        budget: '',
        traveler: ''
    };
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState(initialFormData);
    const navigate = useNavigate();

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    useEffect(() => {
    }, [formData]);

    const onGenerate = async () => {
        if (!formData.location || !formData.startDate || !formData.endDate || !formData.budget || !formData.traveler) {
            toast("Please fill in all the details");
            return;
        }

        const startDate = new Date(formData.startDate);
        const endDate = new Date(formData.endDate);
        const diffTime = Math.abs(endDate - startDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (startDate > endDate) {
            toast("End date cannot be before start date.");
            return;
        }

        setLoading(true);

        const FINAL_PROMPT = AI_PROMPT
            .replace('{location}', formData.location)
            .replace('{totalDays}', diffDays)
            .replace('{traveler}', formData.traveler)
            .replace('{budget}', formData.budget);

        try {
            const result = await chatSession.sendMessage(FINAL_PROMPT);
            const responseText = await result?.response?.text();
            toast("Trip generated successfully!");

            const tripData = {
                location: formData.location,
                startDate: formData.startDate,
                endDate: formData.endDate,
                budget: formData.budget,
                traveler: formData.traveler,
                itinerary: JSON.parse(responseText).itinerary,
                hotelOptions: JSON.parse(responseText).hotelOptions
            };

            const saveResponse = await axios.post('http://localhost:8080/trip/save', tripData);

            const id = saveResponse.data._id;
            if (!id) {
                console.error('Trip ID not found in response:', saveResponse.data);
                toast("Failed to retrieve trip ID.");
                return;
            }

            setFormData(initialFormData);
            navigate(`/view-trip/${id}`);

        } catch (error) {
            const responseText = await result?.response?.text();
            toast("An error occurred while generating or saving the trip. Please try again.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className='Trip-container'>
            <div className="head">
                <h1>Get to know Trips 🗺️</h1>
            </div>
            <div className="para">
                <p>Now there’s two ways to plan your trip—use AI or search on your own. Either way, you’ve got more than 8 million spots to discover, with over one billion traveler reviews and opinions to guide you.</p>
            </div>
            <div className="search">
                <div className="sub-searchheading">
                    <h2>Choose Your Destination</h2>
                    <input
                        placeholder="Enter where to travel"
                        type="text"
                        className='placeName'
                        value={formData.location}
                        onChange={(v) => handleInputChange('location', v.target.value)}
                    />
                </div>
            </div>
            <div className="search">
                <div className="sub-searchheading">
                    <h2>Select Start Date</h2>
                    <DatePicker
                        selected={formData.startDate}
                        onChange={(date) => handleInputChange('startDate', date)}
                        dateFormat="yyyy-MM-dd"
                        className="placeName"
                        placeholderText="Select start date"
                    />
                </div>
            </div>
            <div className="search">
                <div className="sub-searchheading">
                    <h2>Select End Date</h2>
                    <DatePicker
                        selected={formData.endDate}
                        onChange={(date) => handleInputChange('endDate', date)}
                        dateFormat="yyyy-MM-dd"
                        className="placeName"
                        placeholderText="Select end date"
                    />
                </div>
            </div>
            <div className="budget">
                <h1>What is Your Budget?</h1>
                <div className="card-container">
                    {selectBudgetOptions.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleInputChange('budget', item.title)}
                            className="card"
                            style={formData?.budget === item.title ? { boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', border: '1px solid black' } : {}}
                        >
                            <h2 className="icon">{item.icon}</h2>
                            <h2 className="title">{item.title}</h2>
                            <h2 className="desc">{item.desc}</h2>
                        </div>
                    ))}
                </div>
            </div>
            <div className='travel'>
                <h1>Who do you plan on traveling with on your next adventure?</h1>
                <div className="card-container2">
                    {selectTravelLists.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleInputChange('traveler', item.people)}
                            className="card2"
                            style={formData?.traveler === item.people ? { boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', border: '1px solid black' } : {}}
                        >
                            <h2 className="icon2">{item.icon}</h2>
                            <h2 className="title2">{item.title}</h2>
                            <h2 className="desc2">{item.desc}</h2>
                        </div>
                    ))}
                </div>
            </div>
            <button
                disabled={loading}
                className='generateBtn'
                onClick={onGenerate}
            >
                {loading ? <AiOutlineLoading3Quarters className='h-7 w-7 animate-spin' /> : 'Generate Trip'}
            </button>
        </div>
    );
}

export default CreateTrip;
