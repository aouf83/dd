import React, { useState, useEffect, Suspense, lazy, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "../components/common/Loader";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import "../App.css";

const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Course = lazy(() => import("../pages/course"));
const Meets = lazy(() => import("../pages/meets"));
const Practices = lazy(() => import("../pages/practices"));
const Student = lazy(() => import("../pages/student"));
const Teachers = lazy(() => import("../pages/teachers"));
const Lessons = lazy(() => import("../pages/Lessons"));
const Assignments = lazy(() => import("../pages/assignments"));
const Login = lazy(() => import("../pages/login"));
const Addcourse = lazy(() => import("../pages/addcourse"));








const AppRoutes = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAbove1088px, setIsAbove1088px] = useState(window.innerWidth >= 1088);

  const toggleSidebar = () => {
    if (window.innerWidth < 1088) {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  const handleResize = () => {
    setIsAbove1088px(window.innerWidth >= 1088);
    if (window.innerWidth < 1088) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Header toggleSidebar={toggleSidebar} isAbove1088px={isAbove1088px} />
        <Sidebar isOpen={isSidebarOpen} isAbove1088px={isAbove1088px} />
        <div className={`main-contents ${isSidebarOpen ? "sidebar-open" : ""}`}>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/course" element={<Course />} />
              <Route path="/meets" element={<Meets />} />
              <Route path="/practices" element={<Practices />} />
              <Route path="/student" element={<Student />} />
              <Route path="/teachers" element={<Teachers/>} />
              <Route path="/lessons" element={<Lessons/>} />
              <Route path="/assignments" element={<Assignments/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/addcourse" element={<Addcourse/>} />



               <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
};

export default AppRoutes;
