import React from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

const practicesLeft = () => {
  return (
    <div className="practices-left-main">
      <div className="practices-left-videos-container">
        <Plyr
          source={{
            type: "video",
            sources: [
              {
                src: "https://res.cloudinary.com/dayjanr1f/video/upload/v1724825369/skillera/wedkbhih0wdaz6nzczqb.mp4",
                type: "video/mp4",
              },
            ],
            poster:
              "https://d3mbaugvr53zg5.cloudfront.net/media/learn/practices/practice/01_-_Create_Profile_Website_2tdILSb.jpg",
          }}
          options={{
            autoplay: true,
            poster:
              "https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg",
          }}
        />
      </div>
      <div className="practices-left-upcoming-container">lower</div>
    </div>
  );
};

export default practicesLeft;
