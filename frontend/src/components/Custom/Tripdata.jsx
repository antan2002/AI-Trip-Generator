import React from 'react'
import './Trip.css'
function Tripdata({ image, head, text }) {
    return (
        <div className="t-card">
            <div className="t-img">
                <img src={image} alt="image" />
            </div>
            <h4>{head}</h4>
            <p>{text}</p>
        </div>
    )
}

export default Tripdata