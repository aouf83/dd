import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  IconButton,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../../assets/styles/Sidebar.css";

const Sidebar = ({ isOpen }) => {
  const [learningOpen, setLearningOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isAbove1088px, setIsAbove1088px] = useState(window.innerWidth > 1088);

  const handleLearningClick = () => {
    setLearningOpen(!learningOpen);
  };

  const handleMouseEnter = () => {
    if (isAbove1088px) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (isAbove1088px) {
      setIsHovered(false);
    }
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsAbove1088px(window.innerWidth > 1088);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isOpen && !isAbove1088px) {
    return null;
  }

  return (
    <div
      className={`sidebar ${
        isOpen || (isAbove1088px && isHovered) ? "open" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <List>
        <ListItem
          onClick={() => handleItemClick("Dashboard")}
          className={activeItem === "Dashboard" ? "active" : ""}
        >
          <ListItemIcon>
            <img
              src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/menu/dashboard.svg"
              alt="Dashboard"
              style={{ width: "24px" }} /* Adjust icon size */
            />
          </ListItemIcon>
          {(isOpen || isHovered) && <ListItemText primary="Dashboard" />}
        </ListItem>

        <ListItem
          onClick={handleLearningClick}
          className={activeItem === "Learning" ? "active" : ""}
        >
          <ListItemIcon>
            <img
              src="https://steyp.com/static/media/learning.2b4f8717.svg"
              alt="Learning"
              style={{ width: "24px" }} /* Adjust icon size */
            />
          </ListItemIcon>
          {(isOpen || isHovered) && <ListItemText primary="Learning" />}
          {(isOpen || isHovered) &&
            (learningOpen ? <ExpandLess /> : <ExpandMore />)}
        </ListItem>

        <Collapse in={learningOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              onClick={() => handleItemClick("Syllabus")}
              className={activeItem === "Syllabus" ? "active nested" : "nested"}
            >
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              {(isOpen || isHovered) && <ListItemText primary="Syllabus" />}
            </ListItem>
            <ListItem
              onClick={() => handleItemClick("Practices")}
              className={
                activeItem === "Practices" ? "active nested" : "nested"
              }
            >
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              {(isOpen || isHovered) && <ListItemText primary="Practices" />}
            </ListItem>
          </List>
        </Collapse>

        <ListItem
          onClick={() => handleItemClick("Support")}
          className={activeItem === "Support" ? "active" : ""}
        >
          <ListItemIcon>
            <SupportAgentIcon />
          </ListItemIcon>
          {(isOpen || isHovered) && <ListItemText primary="Support" />}
        </ListItem>
      </List>

      <div className="sidebar-footer">
        <IconButton>
          <ArrowForwardIcon />
          {(isOpen || isHovered) && <ListItemText primary="Explore" />}
        </IconButton>

        {/* Social Media Links */}
        {(isOpen || isHovered) && (
          <div className="social-icons">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/social/linkedin.svg"
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/social/facebook.svg"
                alt="Facebook"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/social/instagram.svg"
                alt="Instagram"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/26-07-2023/twitterx.svg"
                alt="Twitter X"
              />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
