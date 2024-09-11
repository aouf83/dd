import React from "react";
import ".././assets/styles/practices.css";
import PracticesLeft from "../components/practicesLeft";
import PracticesRight from "../components/practicesRight";
const practices = () => {
  return (
    <div className="practices-main mt-5">
      <PracticesLeft />
      <PracticesRight />
    </div>
  );
};

export default practices;
