import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ activePage, setActivePage }) => {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false); // For showing confirmation modal

  const handleNavigation = (page) => {
    if (page === "Logout") {
      setShowLogoutConfirmation(true); 
    } else {
      setActivePage(page);
    }
  };

  const confirmLogout = () => {
    setShowLogoutConfirmation(false); 
    navigate("/admin"); 
  };

  const cancelLogout = () => {
    setShowLogoutConfirmation(false); 
  };

  return (
    <div style={styles.sidebar}>
      <h2 style={styles.sidebarHeading}>Syndicate Bank</h2>
      <ul style={styles.sidebarList}>
        {["Home", "Budget", "Fund Transfer", "Logout"].map((page) => (
          <li
            key={page}
            style={{
              ...styles.sidebarItem,
              fontWeight: activePage === page ? "bold" : "normal",
              backgroundColor: hoveredItem === page ? "#ff8c1a" : "",
              borderRadius: "10px",
              color: hoveredItem === page ? "white" : "white",
            }}
            onClick={() => handleNavigation(page)}
            onMouseEnter={() => setHoveredItem(page)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {page}
          </li>
        ))}
      </ul>

      {/* Confirmation Modal */}
      {showLogoutConfirmation && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <p>Are you sure you want to log out?</p>
            <button onClick={confirmLogout} style={styles.confirmButton}>
              Yes
            </button>
            <button onClick={cancelLogout} style={styles.cancelButton}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  sidebar: { width: "200px", background: "#e65c00", color: "black", padding: "20px" },
  sidebarHeading: { marginBottom: "20px" },
  sidebarList: { listStyleType: "none", padding: 0, fontSize: "large" },
  sidebarItem: { margin: "1px 0", cursor: "pointer", padding: "8px" },
  modal: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent black background
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
  },
  confirmButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "10px",
  },
  cancelButton: {
    backgroundColor: "#f44336",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Sidebar;
