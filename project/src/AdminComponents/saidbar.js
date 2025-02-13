import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaMoneyBill, FaExchangeAlt, FaSignOutAlt } from "react-icons/fa";

const Sidebar = ({ activePage, setActivePage }) => {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false); 
  const [isMobile, setIsMobile] = useState(false); 

 
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 320); 
    };


    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
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
      {/* Desktop Sidebar */}
      {!isMobile && (
        <div style={styles.desktopSidebar}>
          <h2 style={styles.sidebarHeading}>Syndicate Bank</h2>

          <ul style={styles.sidebarList}>
            {["Home", "Budget", "Fund Transfer", "Logout"].map((page) => (
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
                {page} {/* Text for desktop */}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Mobile Sidebar */}
      {isMobile && (
        <div style={styles.mobileSidebar}>
          <ul style={styles.sidebarList}>
            {["Home", "Budget", "Fund Transfer", "Logout"].map((page) => (
              <li
                key={page}
                style={{
                  ...styles.sidebarItem,
                  fontWeight: activePage === page ? "bold" : "normal",
                  backgroundColor: hoveredItem === page ? "#ff8c1a" : "",
                  color: hoveredItem === page ? "white" : "white",
                  display: "inline-block", 
                  // textAlign: "start",
                  borderRadius:"5px",
                  width: "auto", 
                  marginLeft:"1px",
                }}
                onClick={() => handleNavigation(page)}
                onMouseEnter={() => setHoveredItem(page)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {page === "Home" ? (
                  <FaHome size={24} />
                ) : page === "Budget" ? (
                  <FaMoneyBill size={24} />
                ) : page === "Fund Transfer" ? (
                  <FaExchangeAlt size={24} />
                ) : page === "Logout" ? (
                  <FaSignOutAlt size={24} />
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      )}

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
  sidebar: {
    width: "auto",
    background: "#e65c00",
    color: "black",
    padding: "20px",
    transition: "width 0.3s ease", 
  },
  sidebarHeading: { marginBottom: "20px" },
  sidebarList: { listStyleType: "none", padding: 0, fontSize: "large" },
  sidebarItem: {
    margin: "1px 0",
    cursor: "pointer",
    padding: "8px",
    transition: "background-color 0.3s", 
    borderRadius: "10px",

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
    width: "auto",
    
  },

  mobileSidebar: {
    width: "11px",
    padding: "10px",
    textAlign: "start",
  },
};

export default Sidebar;
