import React from 'react';
import '../assets/styles/meets.css';

const meets = () => {
    const cardData = [
        {
            title: 'HOW TO DEV IN FRAMER MOTION',
            date: 'SEP 12',
            time: 'THU 07:00 PM',
            speaker: 'Ameera C',
            seats: 200,
            registrations: 126,
        },
        {
            title: 'The Dark Web Unveiled',
            date: 'SEP 14',
            time: 'SAT 06:00 PM',
            speaker: 'Muhammad Vayis',
            seats: 200,
            registrations: 15,
        },
        {
            title: 'TAILWIND CSS',
            date: 'SEP 19',
            time: 'THU 07:00 PM',
            speaker: 'Najiya C A',
            seats: 200,
            registrations: 97,
        },
    ];

    return (
        <div className="card-container">
            {cardData.map((card, index) => (
                <div className="card" key={index}>
                    <div className="card-header">
                        <h3>{card.title}</h3>
                        <span className="date">{card.date}</span>
                    </div>
                    <p>{card.time}</p>
                    <p>Speaker: {card.speaker}</p>
                    <p>Total Seats: {card.seats}</p>
                    <p>Registrations: {card.registrations}</p>
                </div>
            ))}
        </div>
    );
};

export default meets;
