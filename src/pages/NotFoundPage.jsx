import React from "react";

import { Player } from "@lottiefiles/react-lottie-player";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = React.useState(false);

  const handleGoToDashboard = () => {
    navigate("/"); // Change '/dashboard' to the actual dashboard route
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Page Not Found</h1>
      <Player
        src="https://lottie.host/771ded97-aa10-4fe2-b62d-c4c87630fca6/GrmXERnDOy.json"
        background="transparent"
        speed={1}
        style={{ width: "300px", height: "300px" }}
        loop
        controls
        autoplay
        direction={1}
        mode="normal"
      />
      <p style={styles.message}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <button
        style={{
          ...styles.button,
          ...(isHovered ? styles.buttonHover : {}),
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleGoToDashboard}
      >
        Go to Dashboard
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    textAlign: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "1rem",
  },
  message: {
    color: "#666",
    fontSize: "1.2rem",
    marginTop: "1rem",
  },
  button: {
    marginTop: "2rem",
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  buttonHover: {
    backgroundColor: "#333", // Darker shade on hover
  },
};

export default NotFoundPage;
