import React from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/login");
  };

  const handleUser = () => {
    navigate("/loginuser");
  };

  return (
    <div style={styles.container}>
      <button onClick={handleButton} style={{ ...styles.button, ...styles.adminButton }}>
        Admin
      </button>
      <button onClick={handleUser} style={{ ...styles.button, ...styles.userButton }}>
        User
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    flexDirection: "row",
    gap: "20px",
  },
  button: {
    padding: "15px 30px",
    fontSize: "20px",
    color: "white",
    border: "none",
    borderRadius: "15px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
  },
  adminButton: {
    backgroundColor: "dodgerblue",
  },
  userButton: {
    backgroundColor: "#4caf50",
  },
  
};

export default Admin;
