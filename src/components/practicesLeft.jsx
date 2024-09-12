import React from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

const PracticesLeft = () => {
  const datas = [
    {
      name: "Create a Profile Website",
    },
    {
      name: "Create a Profile Website",
    },
    {
      name: "Create a Profile Website",
    },
  ];
  return (
    <div className="practices-left-main p-4">
      <div className="practices-left-videos-container mb-8">
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

      {/* Cards container with custom breakpoint */}
      <div className="practices-left-upcoming-container">
        <h1>Up coming practices</h1>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Card 1 */}
        {datas &&
          datas.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src="https://d3mbaugvr53zg5.cloudfront.net/media/learn/practices/practice/01_-_Create_Profile_Website_2tdILSb.jpg"
                alt="Create Profile Website"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-green-600">#01</h4>
                <h3 className="text-lg font-bold mt-2">{item.name}</h3>
                <p className="text-gray-500">UI Engineer</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PracticesLeft;
