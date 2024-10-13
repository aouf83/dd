import React from 'react';
import '../assets/styles/course.css';
import { IoIosLock } from "react-icons/io";

const Courses = () => {
    const courses = [
        { id: 1, title: 'UI Engineer', image: 'https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg' },
        { id: 2, title: 'Backend Developer', image: 'https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/Backend_Developer_ACsVD3G.jpg' },
        { id: 3, title: 'DevOps Engineer', image: 'https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/DevOps_Engineer.jpg' },
        { id: 4, title: 'Web Application Developer', image: 'https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/Web_Application_Developer_vmaZxha.jpg' },
        { id: 5, title: 'Mobile Application Developer', image: 'https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/Mobile_Application_Developer.jpg' },
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
                    <IoIosLock className="lock-icon" />
                </div>
            ))}
        </div>
    );
};

export default Courses;