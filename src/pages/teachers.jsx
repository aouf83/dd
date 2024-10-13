import React from 'react';
import '../assets/styles/teachers.css';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DescriptionIcon from '@mui/icons-material/Description';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// TeacherCard component
const TeacherCard = ({ title, percentage, color, icon }) => {
  return (
    <div className="teacher-card">
      <div className="teacher-card-header">
        <h3 style={{ color }}>{title}</h3>
        <div className="teacher-card-icon">{icon}</div>
      </div>
      <div className="teacher-card-body">
        <div className="teacher-progress-bar">
          <div className="teacher-progress" style={{ width: `${percentage}%`, backgroundColor: color }}></div>
        </div>
        <p>{percentage}%</p>
      </div>
    </div>
  );
};

// Teachers component
const Teachers = () => {
  return (
    <div className="teachers-section">
      <h2>Web Development</h2>
      <div className="teacher-card-container">
        <TeacherCard title="LESSON" percentage={69} color="#ff6b6b" icon={<AssignmentIcon />} />
        <TeacherCard title="PROJECT" percentage={57} color="#3498db" icon={<DescriptionIcon />} />
        <TeacherCard title="SUBMITED" percentage={70} color="#2ecc71" icon={<CheckCircleIcon />} />
        <TeacherCard title="LIBRARY" percentage={88} color="#ff6f91" icon={<MenuBookIcon />} />
      </div>

      {/* Use Students component here if you want both sections on the same page */}
      <Students />
    </div>
  );
};

// StudentRow component
const StudentRow = ({ rollNo, name, gender, Weeks, contact }) => {
  return (
    <tr>
      <td>{rollNo}</td>
      <td>{name}</td>
      <td>{gender}</td>
      <td >{Weeks}</td>
      <td>{contact}</td>
      <td>
        <button className="action-btn edit-btn"><EditIcon /></button>
        <button className="action-btn delete-btn"><DeleteIcon /></button>
      </td>
    </tr>
  );
};

// Students component
const Students = () => {
  const studentData = [
    { rollNo: 1, name: 'Aakarsh A S', gender: 'Male', Weeks: '1', contact: '9911223346' },
    { rollNo: 2, name: 'Abhijay S', gender: 'Male',  Weeks: '1', contact: '8866332214' },
    { rollNo: 3, name: 'Ali Raza', gender: 'Male',  Weeks: '1', contact: '03054279068' },
    { rollNo: 4, name: 'Bhavvya Sharath', gender: 'Female',  Weeks: '1', contact: '8934125678' },
    // Add more students as needed
  ];

  return (
    <div className="students-section">
      <div className="students-header">
        <h2>Student</h2>
        <button className="add-student-btn">Add Student</button>
      </div>
      <table className="students-table">
        <thead>
          <tr>
            <th>Roll No.</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Weeks</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student) => (
            <StudentRow key={student.rollNo} {...student} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Teachers;
