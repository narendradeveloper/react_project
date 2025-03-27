import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaMoneyBill, FaExchangeAlt, FaSignOutAlt } from "react-icons/fa";

const Sidebar = ({ activePage, setActivePage }) => {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      {!isMobile && (
        <div style={styles.desktopSidebar}>
          <h2 style={styles.sidebarHeading}>Syndicate Bank</h2>
          <ul style={styles.sidebarList}>
            {menuItems.map(({ page, icon }) => (
              <li
                key={page}
                style={{
                  ...styles.sidebarItem,
                  fontWeight: activePage === page ? "bold" : "normal",
                  backgroundColor: hoveredItem === page ? "#ff8c1a" : "",
                  color: hoveredItem === page ? "white" : "white",
                }}
                onClick={() => handleNavigation(page)}
                onMouseEnter={() => setHoveredItem(page)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {icon}
                <span style={{ marginLeft: "10px" }}>{page}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {isMobile && (
        <div style={styles.mobileSidebar}>
          <ul style={styles.sidebarList}>
            {menuItems.map(({ page, icon }) => (
              <li
                key={page}
                style={{
                  ...styles.sidebarItem,
                  backgroundColor: hoveredItem === page ? "#ff8c1a" : "",
                  color: hoveredItem === page ? "white" : "white",
                }}
                onClick={() => handleNavigation(page)}
                onMouseEnter={() => setHoveredItem(page)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {icon}
              </li>
            ))}
          </ul>
        </div>
      )}

      {showLogoutConfirmation && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <p>Are you sure you want to log out?</p>
            <button onClick={confirmLogout} style={styles.confirmButton}>Yes</button>
            <button onClick={cancelLogout} style={styles.cancelButton}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

const menuItems = [
  { page: "Home", icon: <FaHome size={24} /> },
  { page: "Budget", icon: <FaMoneyBill size={24} /> },
  { page: "Fund Transfer", icon: <FaExchangeAlt size={24} /> },
  { page: "Logout", icon: <FaSignOutAlt size={24} /> },
];

const styles = {
  sidebar: {
    background: "#e65c00",
    color: "white",
    padding: "20px",
    transition: "width 0.3s ease",
  },
  sidebarHeading: { marginBottom: "20px" },
  sidebarList: { listStyleType: "none", padding: 0, fontSize: "large" },
  sidebarItem: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    borderRadius: "10px",
    fontSize: "16px",
  },
  modal: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
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
  desktopSidebar: {
    width: "250px", 
  },
  mobileSidebar: {
    width: "60px", 
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export default Sidebar;
