import React, { useState } from 'react';
import '../assets/styles/lessons.css';
import AssignmentIcon from '@mui/icons-material/Assignment';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

// Modal component for adding/editing content
const LessonModal = ({ open, handleClose, onSubmit, currentData }) => {
  const [title, setTitle] = useState(currentData?.title || '');
  const [assignments, setAssignments] = useState(currentData?.assignments || ['']);
  const [videos, setVideos] = useState(currentData?.videos || ['']);

  const handleAssignmentChange = (index, value) => {
    const updatedAssignments = [...assignments];
    updatedAssignments[index] = value;
    setAssignments(updatedAssignments);
  };

  const handleVideoChange = (index, value) => {
    const updatedVideos = [...videos];
    updatedVideos[index] = value;
    setVideos(updatedVideos);
  };

  const addAssignment = () => setAssignments([...assignments, '']);
  const addVideo = () => setVideos([...videos, '']);

  const removeAssignment = (index) => {
    const updatedAssignments = assignments.filter((_, i) => i !== index);
    setAssignments(updatedAssignments);
  };

  const removeVideo = (index) => {
    const updatedVideos = videos.filter((_, i) => i !== index);
    setVideos(updatedVideos);
  };

  const handleSubmit = () => {
    onSubmit({ title, assignments, videos });
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="modal-content">
        <h3>{currentData ? 'Edit' : 'Add'} Lesson Details</h3>
        
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter lesson title"
        />
        
        <label>Assignments</label>
        {assignments.map((assignment, index) => (
          <div key={index} className="input-group">
            <input
              type="text"
              value={assignment}
              onChange={(e) => handleAssignmentChange(index, e.target.value)}
              placeholder="Enter assignment details"
            />
            <IconButton onClick={() => removeAssignment(index)}>
              <DeleteIcon />
            </IconButton>
          </div>
        ))}
        <Button
          startIcon={<AddCircleOutlineIcon />}
          onClick={addAssignment}
          variant="outlined"
        >
          Add Assignment
        </Button>
        
        <label>Video Links</label>
        {videos.map((video, index) => (
          <div key={index} className="input-group">
            <input
              type="text"
              value={video}
              onChange={(e) => handleVideoChange(index, e.target.value)}
              placeholder="Enter video URL"
            />
            <IconButton onClick={() => removeVideo(index)}>
              <DeleteIcon />
            </IconButton>
          </div>
        ))}
        <Button
          startIcon={<AddCircleOutlineIcon />}
          onClick={addVideo}
          variant="outlined"
        >
          Add Video
        </Button>
        
        <Button onClick={handleSubmit} variant="contained" color="primary">
          {currentData ? 'Save' : 'Add'}
        </Button>
      </div>
    </Modal>
  );
};

// Lesson component for each week
const LessonCard = ({ week, data, handleEdit }) => {
  return (
    <div className="lesson-card">
      <h4>Week {week}</h4>
      <div className="lesson-details">
        <p>Title: {data.title || 'No title added'}</p>
        {data.assignments.map((assignment, index) => (
          <p key={index}><AssignmentIcon /> Assignment {index + 1}: {assignment || 'No assignment added'}</p>
        ))}
        {data.videos.map((video, index) => (
          <p key={index}><VideoLibraryIcon /> Video {index + 1}: {video || 'No video added'}</p>
        ))}
        <Button onClick={handleEdit} variant="outlined" startIcon={<EditIcon />}>Edit</Button>
      </div>
    </div>
  );
};

// Main Lessons component
const Lessons = () => {
  const weeksInSixMonths = 26; // Roughly 6 months equals 26 weeks

  const [lessonsData, setLessonsData] = useState(
    Array.from({ length: weeksInSixMonths }, () => ({
      title: '',
      assignments: [''],
      videos: ['']
    }))
  );

  const [currentWeek, setCurrentWeek] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleEdit = (week) => {
    setCurrentWeek(week);
    setModalOpen(true);
  };

  const handleModalSubmit = (newData) => {
    setLessonsData((prev) =>
      prev.map((lesson, index) =>
        index === currentWeek ? newData : lesson
      )
    );
    setModalOpen(false);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentWeek(null);
  };

  return (
    <div className="lessons-section">
      <div className="heading-lessons"> 
        <h2>Lessons Overview</h2>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => setModalOpen(true)}
        >
          Add New Week
        </Button>
      </div>

      <div className="lesson-weeks">
        {lessonsData.map((data, week) => (
          <LessonCard
            key={week}
            week={week + 1}
            data={data}
            handleEdit={() => handleEdit(week)}
          />
        ))}
      </div>

      {modalOpen && currentWeek !== null && (
        <LessonModal
          open={modalOpen}
          handleClose={closeModal}
          onSubmit={handleModalSubmit}
          currentData={lessonsData[currentWeek]}
        />
      )}
    </div>
  );
};

export default Lessons;
