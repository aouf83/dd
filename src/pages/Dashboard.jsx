import React, { useState } from "react";
import "../assets/styles/dashboard.css";
import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

const Dashboard = () => {
  const dayImages = [
    "https://d3mbaugvr53zg5.cloudfront.net/media/learn/practices/practice/01_-_Create_Profile_Website_2tdILSb.jpg",
    "https://d3mbaugvr53zg5.cloudfront.net/media/learn/practices/practice/01_-_Create_Profile_Website_2tdILSb.jpg",
    "https://d3mbaugvr53zg5.cloudfront.net/media/learn/practices/practice/01_-_Create_Profile_Website_2tdILSb.jpg",
    "https://d3mbaugvr53zg5.cloudfront.net/media/learn/practices/practice/01_-_Create_Profile_Website_2tdILSb.jpg"
  ];

  const [completedItems, setCompletedItems] = useState([false, false, false, false, false, false, false, false]);

  const handleItemCompletion = (index) => {
    const newCompletedItems = [...completedItems];
    newCompletedItems[index] = !newCompletedItems[index];
    setCompletedItems(newCompletedItems);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-top">
        {/* Main Video Section (Left Side) */}
        <div className="dashboard-top-left">
          <h1 className="dashboard-title">Day 1</h1>
          <div className="thumbnail-container">
            <Card isFooterBlurred className="custom-card">
              <CardHeader className="p-2 absolute z-10 top-1 flex-col items-start">
                <p className="day-label text-white/60 uppercase font-bold">
                  Day 1
                </p>
                <h4 className="card-title text-white/90 font-medium">
                  Create Profile Website
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Profile Website background"
                className="z-0 w-full h-full object-cover"
                src="https://d3mbaugvr53zg5.cloudfront.net/media/learn/practices/practice/01_-_Create_Profile_Website_2tdILSb.jpg"
              />
              <CardFooter className="p-3 absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 flex justify-between items-center">
                <Button className="start-btn" radius="full" size="xs">
                  Start Now
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Learning Path (Right Side) */}
        <div className="dashboard-top-right">
          <h3>Learning Path</h3>
          <div className="learning-path">
            <div className="learning-path-header">
              <h4>Section 1: Front-End Development</h4>
              <span>{completedItems.filter(item => item).length} / {completedItems.length} | 37min</span>
            </div>
            <div className="learning-path-content">
              {[
                { title: "1. Introduction to Front-End", time: '3min' },
                { title: "2. HTML Basics", time: '1min' },
                { title: "3. CSS Fundamentals", time: '1min' },
                { title: "4. JavaScript Overview", time: '5min' },
                { title: "5. Building Responsive Websites", time: '8min' },
                { title: "6. Web Performance Optimization", time: '10min' },
              ].map((item, index) => (
                <div key={index} className="learning-path-item">
                  {/* Custom Checkbox */}
                  <div className="checkbox-wrapper-19">
                    <input 
                      type="checkbox" 
                      id={`cbtest-${index}`} 
                      checked={completedItems[index]} 
                      onChange={() => handleItemCompletion(index)} 
                    />
                    <label htmlFor={`cbtest-${index}`} className="check-box"></label>
                  </div>
                  {/* Task Title */}
                  <span>{item.title} - {item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Section with small cards */}
      <div className="additional-cards">
        {[2, 3, 4, 5].map((day, index) => (
          <Card key={day} isFooterBlurred className="custom-card small-card">
            <CardHeader className="p-2 absolute z-10 top-1 flex-col items-start">
              <p className="day-label text-white/60 uppercase font-bold">
                Day {day}
              </p>
              <h4 className="card-title text-white/90 font-medium">
                Task for Day {day}
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt={`Task for Day ${day}`}
              className="z-0 w-full h-full object-cover"
              src={dayImages[index]} // Use the image from the array
            />
            <CardFooter className="p-3 absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 flex justify-between items-center">
              <Button className="start-btn" radius="full" size="xs">
                Start Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Days Section */}
      <div className="days">
        {/* Include your Days component here */}
      </div>
    </div>
  );
};

export default Dashboard;
