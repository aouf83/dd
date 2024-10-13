import React from "react";
import { RingLoader } from "react-spinners";

const Loader = () => {
  return (
    <div style={styles.loaderContainer}>
      <RingLoader color="#6366F1" size={50} />
    </div>
  );
};

const styles = {
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",  // Full viewport height to center vertically
    width: "100vw",   // Full viewport width to center horizontally
    position: "fixed",  // Fixed to avoid any scrolling issues
    top: 0,
    left: 0,
  },
};

export default Loader;
