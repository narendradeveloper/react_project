import React from "react";

const Sidebar = ({ activePage, setActivePage }) => (
  <div style={{ width: "250px", background: "#3e2b1b", color: "white", padding: "20px" }}>
    <h2 style={{ marginBottom: "20px" }}>Avion Bank</h2>
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {["Home", "Budget App"].map((page) => (
        <li
          key={page}
          style={{
            margin: "10px 0",
            cursor: "pointer",
            fontWeight: activePage === page ? "bold" : "normal",
          }}
          onClick={() => setActivePage(page)}
        >
          {page}
        </li>
      ))}
    </ul>
  </div>
);

export default Sidebar;
