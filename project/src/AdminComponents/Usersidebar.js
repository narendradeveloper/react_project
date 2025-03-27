import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Home, UserPlus, Send, DollarSign, LogOut } from "lucide-react"; 
import CreateAccount from "./Createacount";
import Userhome1 from "./uerhome1";
import UserfundTransfer from "./Userfundtrasfor";
import Userdeposit from "./Userdeposit";
import Userwithdraw from "./Userwithdraw";

const Usersidebar = () => {
  const [accounts, setAccounts] = useState(() => {
    const savedAccounts = localStorage.getItem("accounts");
    return savedAccounts ? JSON.parse(savedAccounts) : [];
  });

  const [activePage, setActivePage] = useState("home");
  const [activeButton, setActiveButton] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("accounts", JSON.stringify(accounts));
  }, [accounts]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCreateAccount = (newAccount) => {
    setAccounts((prevAccounts) => [...prevAccounts, newAccount]);
    setActivePage("home");
    setActiveButton("home");
  };

  const handleLogout = () => setShowLogoutConfirmation(true);
  const confirmLogout = () => navigate("/admin");
  const cancelLogout = () => setShowLogoutConfirmation(false);

  const renderContent = () => {
    switch (activePage) {
      case "home":
        return <Userhome1 accounts={accounts} />;
      case "createAccount":
        return <CreateAccount onCreateAccount={handleCreateAccount} />;
      case "fundTransfer":
        return <UserfundTransfer accounts={accounts} setAccounts={setAccounts} />;
      case "deposit":
        return <Userdeposit accounts={accounts} setAccounts={setAccounts} />;
      case "withdraw":
        return <Userwithdraw accounts={accounts} setAccounts={setAccounts} />;
      default:
        return <div>Select a page.</div>;
    }
  };

  const handleButtonClick = (page) => {
    setActivePage(page);
    setActiveButton(page);
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <div style={{
        width: isMobile ? "60px" : "250px",
        height: "100vh",
        backgroundColor: "#e65c00",
        position: "fixed",
        overflowY: "auto",
        paddingTop: "10px",
        transition: "width 0.3s ease-in-out",
      }}>
        {!isMobile && (
          <h2 style={{ paddingLeft: "20px", marginTop: "5vh", color: "white" }}>
            Syndicate Bank
          </h2>
        )}
        <div>
          {menuItems.map(({ page, icon, text }) => (
            <div
              key={page}
              onClick={() => handleButtonClick(page)}
              style={{
                ...styles.sidebarItem,
                backgroundColor: activeButton === page ? "#ff8c1a" : "transparent",
                color: "white",
                flexDirection: isMobile ? "column" : "row",
                justifyContent: "flex-start",
                padding: isMobile ? "10px 0" : "10px 15px",
              }}
            >
              <div style={{ width: "30px", display: "flex", justifyContent: "center" }}>
                {icon}
              </div>
              {!isMobile && <span style={{ marginLeft: "15px" }}>{text}</span>}
            </div>
          ))}
          <div onClick={handleLogout} style={styles.sidebarItem}>
            <LogOut size={24} color="white" />
            {!isMobile && <span style={{ marginLeft: "15px" }}>Logout</span>}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ marginLeft: isMobile ? "60px" : "250px", padding: "20px", width: "100%" }}>
        {renderContent()}
      </div>

      {/* Logout Confirmation Modal */}
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
  { page: "home", icon: <Home size={24} color="white" />, text: "Home" },
  { page: "createAccount", icon: <UserPlus size={24} color="white" />, text: "Create Account" },
  { page: "fundTransfer", icon: <Send size={24} color="white" />, text: "Fund Transfer" },
  { page: "deposit", icon: <DollarSign size={24} color="white" />, text: "Deposit" },
  { page: "withdraw", icon: <DollarSign size={24} color="white" />, text: "Withdraw" },
];

const styles = {
  sidebarItem: {
    cursor: "pointer",
    padding: "12px",
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    transition: "all 0.3s",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
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

export default Usersidebar;
