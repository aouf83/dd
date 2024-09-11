import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "../components/common/Loader";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import "../App.css";

const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Practices = lazy(() => import("../pages/practices"));

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
        <div className={`main-content ${isSidebarOpen ? "sidebar-open" : ""}`}>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/practices" element={<Practices />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
};

export default AppRoutes;
