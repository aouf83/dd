import React from "react";
import PracticesLeft from "../components/practicesLeft";
import PracticesRight from "../components/practicesRight";
import "../assets/styles/practices.css";

const Practices = () => {
  return (
    <div className="practices-main">
      <PracticesLeft />
      <PracticesRight />
    </div>
  );
};

export default Practices;
