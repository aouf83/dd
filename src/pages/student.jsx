// Dashboard.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList, faCalendarCheck, faTasks, faProjectDiagram, faClock, faChartPie } from "@fortawesome/free-solid-svg-icons"; // Import icons
import ProgressSection from "../pages/ProgressSection";
import "../assets/styles/student.css"; // Adjust this if the CSS file path is different

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="one-header">
        <h1>Welcome to Stack Center</h1>
        <p>Education is the passport to the future, so learn more & more</p>
        <button className="start-btn">Start Now!</button>
      </header>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stats-card">
          <FontAwesomeIcon icon={faCalendarCheck} className="stats-icon" />
          <h3>Days Completed</h3>
          <p>0/7</p>
        </div>
        <div className="stats-card">
          <FontAwesomeIcon icon={faClipboardList} className="stats-icon" />
          <h3>Weeks Completed</h3>
          <p>0/27</p>
        </div>
        <div className="stats-card">
          <FontAwesomeIcon icon={faTasks} className="stats-icon" />
          <h3>Total Assignments</h3>
          <p>0/30</p>
        </div>
        <div className="stats-card">
          <FontAwesomeIcon icon={faProjectDiagram} className="stats-icon" />
          <h3>Total Projects</h3>
          <p>0/20</p>
        </div>
      </div>

      {/* Hours Section */}
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

      {/* Progress Section */}
      <div className="progress-section">
        <h3>Progress Score</h3>
        <ProgressSection />
      </div>
    </div>
  );
};

export default Dashboard;
