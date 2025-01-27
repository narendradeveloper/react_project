import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const [allowNavigation, setAllowNavigation] = useState(false); 

  useEffect(() => {
    const handlePopState = (event) => {
      if (!allowNavigation) {
        window.history.pushState(null, "", "/admin"); 
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState); 
    };
  }, [allowNavigation]);

  const handleAdminClick = () => {
    setAllowNavigation(true); 
    navigate("/login"); 
  };

  const handleUserClick = () => {
    setAllowNavigation(true); 
    navigate("/loginuser"); 
  };

  return (
    <div style={styles.container}>
      <button onClick={handleAdminClick} style={{ ...styles.button, ...styles.adminButton }}>
        Admin
      </button>
      <button onClick={handleUserClick} style={{ ...styles.button, ...styles.userButton }}>
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
