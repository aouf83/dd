import React, { useState } from 'react';
import '../assets/styles/meets.css'; // Import the CSS file

const App = () => {
    const [showBadge, setShowBadge] = useState(false);

    const eventData = [
        {
            image: 'https://via.placeholder.com/300', // Replace with actual image URL
            date: 'SEP 12',
            time: 'THU 07:00 PM',
            title: 'HOW TO DEV IN FRAMER MOTION & INSTALL & USE',
            speaker: 'Ameera C',
            totalSeats: 200,
            registrations: 126,
        },
        // Add more card data here as needed
        {
            image: 'https://via.placeholder.com/300', // Replace with actual image URL
            date: 'SEP 12',
            time: 'THU 07:00 PM',
            title: 'HOW TO DEV IN FRAMER MOTION & INSTALL & USE',
            speaker: 'Ameera C',
            totalSeats: 200,
            registrations: 126,
        },
    ];

    const handleCardClick = () => {
        setShowBadge(true);
    };

    return (
        <div className="app-container">
            <h1>Upcoming Meets</h1>
            <div className="card-container">
                {eventData.map((event, index) => (
                    <div key={index} className="event-card" onClick={handleCardClick}>
                        {/* Image at the top */}
                        <div className="event-image">
                            <img src={event.image} alt={event.title} />
                        </div>

                        {/* Registration status */}
                        {showBadge && (
                            <div className="registration-success">
                                <span>✔ Registration Successful</span>
                            </div>
                        )}

                        {/* Event details */}
                        <div className="event-details">
                            <span className="event-date">{event.date}</span>
                            <p className="event-time">{event.time}</p>
                            <h3 className="event-title">{event.title}</h3>
                            <p className="event-speaker">Speaker: {event.speaker}</p>
                        </div>

                        {/* Seat information */}
                        <div className="event-info">
                            <p>Total Seats: {event.totalSeats}</p>
                            <p>Registrations: {event.registrations}</p>
                        </div>

                        {/* Registration status button */}
                        <div className="event-status">
                            <button className="registered-button">Register</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
