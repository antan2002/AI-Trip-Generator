import React from 'react'
import './Data.css'
function DestinationData({ heading, text, image1, image2, className }) {
    return (
        <div className={className}>
            <div className="text">
                <h2>{heading}</h2>
                <p>{text}</p>
            </div>
            <div className="images">

                <img src={image1} alt="Destination 1" />
                <img src={image2} alt="Destination 2" />

            </div>
        </div>
    )
}

export default DestinationData