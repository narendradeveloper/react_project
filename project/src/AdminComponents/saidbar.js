import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ activePage, setActivePage }) => {
  const navigate = useNavigate();

  const handleNavigation = (page) => {
    setActivePage(page);
    if (page === "Logout") {
      navigate("/admin"); // Navigate to Admin page on Logout
    }
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
            }}
            onClick={() => handleNavigation(page)}
          >
            {page}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  sidebar: { width: "250px", background: "DodgerBlue", color: "white", padding: "20px" },
  sidebarHeading: { marginBottom: "20px" },
  sidebarList: { listStyleType: "none", padding: 0, fontSize: "large" },
  sidebarItem: { margin: "10px 0", cursor: "pointer" },
};

export default Sidebar;
