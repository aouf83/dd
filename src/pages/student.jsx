import React from "react";
// Import the images
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons"; // Import icons

import "../assets/styles/student.css"; // Adjust this if the CSS file path is different

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Profile Header Section */}

      {/* One Header Section */}
      <header className="one-header">
        <h1>Welcome to Stack Center</h1>
        <h2>
          Become a Full-Stack Web Developer with just ONE course. HTML, CSS,
          Javascript, Node, React, PostgreSQL, Web3 and DApps
        </h2>

        {/* Mobile Course Card Section */}
        <div className="mobile-course-card">
          <div className="mobile-course-image-container">
            <img
              src="https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg"
              alt="UI Engineer"
              className="mobile-course-image"
            />
          </div>
          <div className="mobile-course-content">
            <span className="mobile-course-number">
              The complete 2024 Web Development bootcamp
            </span>
            <h3>Ahmed Kabeer</h3>
          </div>

          {/* Progress Section */}
          <div className="mobile-course-progress">
            <div className="mobile-progress-bar">
              <div
                className="mobile-progress-bar-fill"
                style={{ width: "24%" }}
              ></div>
            </div>
            <div className="mobile-progress-text">24%</div>
          </div>
          <button className="continue-course-button">Continue Course</button>
        </div>
      </header>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stats-card">
          <img src={img1} alt="Days" className="stats-image" />
          <div>
            <h3>Days</h3>
            <p>0/7</p>
          </div>
        </div>
        <div className="stats-card">
          <img src={img4} alt="Weeks" className="stats-image" />
          <div>
            <h3>Weeks</h3>
            <p>0/27</p>
          </div>
        </div>
        <div className="stats-card">
          <img src={img3} alt="Assignments" className="stats-image" style={{marginLeft:"-15px ", height:"48px"}}/>
          <div>
            <h3>Assignments</h3>
            <p>0/30</p>
          </div>
        </div>
        <div className="stats-card">
          <img src={img2} alt="Projects" className="stats-image" />
          <div>
            <h3>Projects</h3>
            <p>0/20</p>
          </div>
        </div>
      </div>

      {/* Hours Section (unchanged) */}
      <div className="hours-section">
        <div className="hours-card">
          <FontAwesomeIcon icon={faClock} className="hours-icon" />
          <h3>Total Hours Spent</h3>
          <p>736 hours</p>
          <p>Long before you sit down to put the make sure you breathe</p>
        </div>
        <div className="user-status-card">
          <FontAwesomeIcon icon={faChartPie} className="status-icon" />
          <h3>Overall Progress</h3>
          <p>Solved: 72.56%</p>
          <p>Unsolved: 29.34%</p>
        </div>
      </div>
    </div>
  );
};



export default Dashboard;
