import React, { useEffect, useState } from 'react';
import '../assets/styles/assignments.css'; // Import the CSS file




// AssignmentsPage.jsx

// AssignmentsPage.jsx


const AssignmentsPage = () => {
    const [assignments] = useState([
        {
            level: 1,
            assignment: {
                id: 1,
                title: "Level 1 Assignment",
                description: "Complete the exercises for Level 1.",
                submissions: [
                    { student: { name: "John Doe", submissionDate: "2024-10-01", status: "Submitted", details: "John's submission details..." } },
                    { student: { name: "Alice Johnson", submissionDate: "2024-10-03", status: "Reviewed", details: "Alice's submission details..." } }
                ]
            }
        },
        {
            level: 2,
            assignment: {
                id: 2,
                title: "Level 2 Assignment",
                description: "Complete the exercises for Level 2.",
                submissions: [
                    { student: { name: "Jane Smith", submissionDate: "2024-10-05", status: "Pending", details: "Jane's submission details..." } },
                    { student: { name: "Mark Brown", submissionDate: "2024-10-06", status: "Submitted", details: "Mark's submission details..." } }
                ]
            }
        },
        // Add more assignments as needed...
    ]);

    const handleAccept = (studentName, assignmentId) => {
        alert(`Assignment ${assignmentId} accepted for ${studentName}!`);
    };

    const handleReject = (studentName, assignmentId) => {
        alert(`Assignment ${assignmentId} rejected for ${studentName}!`);
    };

    const handleReview = (studentName, assignmentId) => {
        const review = prompt(`Enter your review for ${studentName}'s Assignment ${assignmentId}:`);
        if (review) {
            alert(`Review for ${studentName}'s Assignment ${assignmentId}: ${review}`);
        }
    };

    const handleOpenDetails = (details) => {
        alert(details);
    };

    return (
        <div className="assignments-container">
            <h1>Assignments</h1>
            {assignments.map(({ level, assignment }) => (
                <div key={level} className="level-section">
                    <h2>Level {level}</h2>
                    <div className="assignment-card">
                        <h3 className="assignment-title">{assignment.title}</h3>
                        <p className="assignment-description">{assignment.description}</p>
                        <div className="submission-table">
                            <div className="submission-header">
                                <div>Submitted By</div>
                                <div>Submission Date</div>
                                <div>Status</div>
                                <div>Actions</div>
                            </div>
                            {assignment.submissions.map((submission, index) => (
                                <div key={index} className="submission-details">
                                    <p className="student-name">{submission.student.name}</p>
                                    <p className="submission-date">{submission.student.submissionDate}</p>
                                    <p className="assignment-status">{submission.student.status}</p>
                                    <div className="assignment-buttons">
                                        <button className="open-btn" onClick={() => handleOpenDetails(submission.student.details)}>Open</button>
                                        <button className="accept-btn" onClick={() => handleAccept(submission.student.name, assignment.id)}>Accept</button>
                                        <button className="reject-btn" onClick={() => handleReject(submission.student.name, assignment.id)}>Reject</button>
                                        <button className="review-btn" onClick={() => handleReview(submission.student.name, assignment.id)}>Review</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AssignmentsPage;
