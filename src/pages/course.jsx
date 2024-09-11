import React from 'react';
import '../assets/styles/course.css';

const Courses = () => {
    const courses = [
        { id: 1, title: 'UI Engineer', image: 'https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg' },
        { id: 2, title: 'Backend Developer', image: 'https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg' },
        { id: 3, title: 'DevOps Engineer', image: 'https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg' },
        { id: 4, title: 'Web Application Developer', image: 'https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg' },
        { id: 5, title: 'Mobile Application Developer', image: 'https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg' },
    ];

    return (
        <div className="course-container">
            {courses.map((course, index) => (
                <div key={course.id} className="course-card">
                    <div className="course-image-container">
                        <img src={course.image} alt={course.title} className="course-image" />
                    </div>
                    <div className="course-content">
                        <span className="course-number">#{index + 1}</span>
                        <h3>{course.title}</h3>
                    </div>
                    <img src="https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg" alt="lock" className="lock-icon" />
                </div>
            ))}
        </div>
    );
};

export default Courses;
