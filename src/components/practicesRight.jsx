import React from "react";

const practicesRight = () => {
  return (
    <div className="practices-right-main">
      <div>
        <div className="attended-practices">
          <h1>Attended Pracrices</h1>
        </div>
        <div className="practices-right-image-container">
          <div>
            <img
              style={{ maxHeight: "300px", width: "100%" }}
              src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/practices/assets/Emptypractices.svg"
              alt="emptyimage"
            />
          </div>
          <div className="practices-right-Empty">
            <h3>Empty!</h3>

            <p>There are no attended practices</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default practicesRight;
