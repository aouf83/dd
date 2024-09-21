import React from "react";
import "../assets/styles/dashboard.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

import BarChart from ".././components/common/BarChart";
import Days from "../components/Days";
const Dashboard = () => {
  return (
    <div>
      <div>
        <h1 className="dashboard-title">Day 1</h1>
      </div>
      <div className="dashboard-top">
        <div className="dashboard-top-left">
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
                <div className="flex gap-2 items-center">
                  <Image
                    alt="App icon"
                    className="rounded-full w-8 h-8 bg-black"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBLjzgTuBQpCWa1KWOwFJSjPhSeqiQAclLA&s"
                  />
                </div>
                <Button className="start-btn" radius="full" size="xs">
                  Start Now
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="dashboard-top-right mt-2">
          <BarChart />
        </div>
      </div>
      <div className="days" >
  <Days/>
      </div>
    </div>
  );
};

export default Dashboard;
