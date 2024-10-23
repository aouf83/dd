import React from "react";

const PracticesRight = () => {
  const courseList = [
    { title: "A Note About 2023 Course Updates", type: "doc", completed: true },
    { title: "What is HTML?", type: "video", completed: true },
    { title: "How to Download the Course Resources", type: "video", completed: true },
    { title: "HTML Heading Elements", type: "video", completed: true, hasResources: true },
    { title: "HTML Paragraph Elements", type: "video", completed: true, hasResources: true },
    { title: "Self Closing Tags", type: "video", completed: true },
    { title: "[Project] Movie Ranking", type: "video", completed: true, hasResources: true },
    { title: "How to Ace this Course", type: "video", completed: true },
  ];

  return (
    <div className="practices-right-main">
      <div className="attended-practices">
        <h1>Level 1</h1>
        <h3> Introduction to HTML</h3>
      </div>

      <ul className="course-list">
        {courseList.map((course, index) => (
          <li key={index} className="course-item">
            <div className="course-info">
              <input type="checkbox" className="custom-checkbox" checked={course.completed} readOnly />
              <span className="course-title">{course.title}</span>
            </div>
            <div className="course-meta">
              {course.type === "video" ? (
                <span className="video-icon"></span>
              ) : (
                <span className="doc-icon">📄</span>
              )}
              <span className="course-duration">{course.duration}</span>
              {course.hasResources && (
                <button className="resources-button">Resources ▼</button>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="practices-right-image-container">
        <img
          style={{ maxHeight: "300px", width: "100%" }}
          src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/practices/assets/Emptypractices.svg"
          alt="emptyimage"
        />
        <div className="practices-right-Empty">
          <h3>Empty!</h3>
          <p>There are no attended practices</p>
        </div>
      </div>
    </div>
  );
};

export default PracticesRight;
