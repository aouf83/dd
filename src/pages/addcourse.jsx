import React, { useState } from 'react';
import '../assets/styles/addcourse.css';

const AdminCourses = () => {
  const [courses, setCourses] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newImage, setNewImage] = useState(null);
  const [editingCourseId, setEditingCourseId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editImage, setEditImage] = useState(null);

  // Handle new course image change
  const handleNewImageChange = (e) => {
    setNewImage(e.target.files[0]);
  };

  // Handle form submission for new course
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = {
      id: Date.now(),
      title: newTitle,
      image: URL.createObjectURL(newImage),
    };
    setCourses([...courses, newCourse]);
    setNewTitle('');
    setNewImage(null);
  };

  // Start editing a course
  const startEditCourse = (course) => {
    setEditingCourseId(course.id);
    setEditTitle(course.title);
    setEditImage(course.image); // Store the current image
  };

  // Handle image change during course editing
  const handleEditImageChange = (e) => {
    setEditImage(e.target.files[0]);
  };

  // Save the edited course
  const saveEditCourse = (courseId) => {
    const updatedCourses = courses.map((course) =>
      course.id === courseId
        ? {
            ...course,
            title: editTitle,
            image: editImage instanceof File ? URL.createObjectURL(editImage) : course.image, // Handle image replacement
          }
        : course
    );
    setCourses(updatedCourses);
    setEditingCourseId(null); // Exit edit mode
    setEditTitle(''); // Clear edit title
    setEditImage(null); // Clear edit image
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingCourseId(null);
    setEditTitle('');
    setEditImage(null);
  };

  // Delete a course
  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course.id !== courseId));
  };

  return (
    <div className="admin-courses-container">
      {/* Add New Course Form */}
      <form onSubmit={handleSubmit} className="new-course-form">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Course Title"
          className="new-course-input-field"
          required
        />
        <input
          type="file"
          onChange={handleNewImageChange}
          accept="image/*"
          className="new-course-input-file"
          required
        />
        <button type="submit" className="new-course-add-btn">Add Course</button>
      </form>

      {/* List of Courses */}
      <div className="courses-list-container">
        {courses.map((course) => (
          <div key={course.id} className="course-item-container">
            {editingCourseId === course.id ? (
              // Edit Mode
              <div className="course-edit-mode">
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="edit-course-input"
                />
                <input
                  type="file"
                  onChange={handleEditImageChange}
                  accept="image/*"
                  className="edit-course-input-file"
                />
                <div className="edit-course-actions">
                  <button
                    onClick={() => saveEditCourse(course.id)}
                    className="edit-course-save-btn"
                  >
                    Save
                  </button>
                  <button onClick={cancelEdit} className="edit-course-cancel-btn">Cancel</button>
                </div>
              </div>
            ) : (
              // View Mode
              <div className="course-view-mode">
                <img src={course.image} alt={course.title} className="course-image-display" />
                <h4 className="course-title">{course.title}</h4>
                <div className="course-action-buttons">
                  <button onClick={() => startEditCourse(course)} className="course-edit-btn">
                    Edit
                  </button>
                  <button onClick={() => deleteCourse(course.id)} className="course-delete-btn">
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCourses;
