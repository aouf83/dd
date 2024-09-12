import React, { useState } from 'react';
import '../assets/styles/meets.css'; // Ensure this file has the updated unique class names

const App = () => {
    const [registeredEvents, setRegisteredEvents] = useState([]);

    const eventData = [
        {
            image: 'https://wallpapers.com/images/hd/plexes-numbers-code-cyberspace-rendering-mjhn2mwqb8xzjg96.webp',
            date: 'SEP 12',
            time: 'THU 07:00 PM',
            title: 'HOW TO DEV IN FRAMER MOTION & INSTALL & USE',
            speaker: 'Ameera C',
            totalSeats: 200,
            registrations: 126,
        },
        {
            image: 'https://wallpapers.com/images/hd/plexes-numbers-code-cyberspace-rendering-mjhn2mwqb8xzjg96.webp',
            date: 'SEP 12',
            time: 'THU 07:00 PM',
            title: 'HOW TO DEV IN FRAMER MOTION & INSTALL & USE',
            speaker: 'Ameera C',
            totalSeats: 200,
            registrations: 126,
        },
        {
            image: 'https://wallpapers.com/images/hd/plexes-numbers-code-cyberspace-rendering-mjhn2mwqb8xzjg96.webp',
            date: 'SEP 12',
            time: 'THU 07:00 PM',
            title: 'HOW TO DEV IN FRAMER MOTION & INSTALL & USE',
            speaker: 'Ameera C',
            totalSeats: 200,
            registrations: 126,
        },
    ];

    const handleRegisterClick = (index) => {
        if (!registeredEvents.includes(index)) {
            setRegisteredEvents([...registeredEvents, index]);
            eventData[index].registrations += 1; // Increment registration count
        }
    };

    return (
        <div className="unique-app-container">
            <h1>Upcoming Meets</h1>
            <div className="unique-card-container">
                {eventData.map((event, index) => (
                    <div key={index} className="unique-event-card">
                        {/* Image at the top */}
                        <div className="unique-event-image">
                            <img src={event.image} alt={event.title} />
                        </div>

                        {/* Reserved space for Registration Successful badge */}
                        <div className="unique-registration-success-container">
                            {registeredEvents.includes(index) && (
                                <div className="unique-registration-success">
                                    <span>✔ Registration Successful</span>
                                </div>
                            )}
                        </div>

                        {/* Event details */}
                        <div className="unique-event-details">
                            <span className="unique-event-date">{event.date}</span>
                            <p className="unique-event-time">{event.time}</p>
                            <h3 className="unique-event-title">{event.title}</h3>
                            <p className="unique-event-speaker">Speaker: {event.speaker}</p>
                        </div>

                        {/* Seat information */}
                        <div className="unique-event-info">
                            <p>Total Seats: {event.totalSeats}</p>
                            <p>Registrations: {event.registrations}</p>
                        </div>

                        {/* Registration button */}
                        <div className="unique-event-status">
                            <button
                                className={`unique-registered-button ${registeredEvents.includes(index) ? 'registered' : ''}`}
                                onClick={() => handleRegisterClick(index)}
                                disabled={registeredEvents.includes(index)}
                            >
                                {registeredEvents.includes(index) ? 'Registered' : 'Register'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
