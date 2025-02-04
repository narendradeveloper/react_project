import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("accounts", JSON.stringify(accounts));
  }, [accounts]);

  const handleCreateAccount = (newAccount) => {
    setAccounts((prevAccounts) => {
      const updatedAccounts = [...prevAccounts, newAccount];
      return updatedAccounts;
    });
    setActivePage("home");
    setActiveButton("home");
  };

  const handleLogout = () => {
    setShowLogoutConfirmation(true); 
  };

  const confirmLogout = () => {
    navigate("/admin"); 
    setShowLogoutConfirmation(false); 
  };

  const cancelLogout = () => {
    setShowLogoutConfirmation(false); 
  };

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
      <div
        style={{
          width: "250px",
          height: "100vh",
          backgroundColor: "#e65c00",
          position: "fixed",
          overflowY: "auto",
          paddingTop: "10px",
        }}
      >
        <h2 style={{ paddingLeft: "10px", marginTop: "5vh" }}>Syndicate Bank</h2>
        <div>
          <div
            onClick={() => handleButtonClick("home")}
            style={{
              ...styles.sidebarItem,
              backgroundColor: activeButton === "home" ? "#ff8c1a" : "transparent",
              color: activeButton === "home" ? "white" : "black",
            }}
          >
            Home
          </div>
          <div
            onClick={() => handleButtonClick("createAccount")}
            style={{
              ...styles.sidebarItem,
              backgroundColor: activeButton === "createAccount" ? "#ff8c1a" : "transparent",
              color: activeButton === "createAccount" ? "white" : "black",
            }}
          >
            Create Account
          </div>
          <div
            onClick={() => handleButtonClick("fundTransfer")}
            style={{
              ...styles.sidebarItem,
              backgroundColor: activeButton === "fundTransfer" ? "#ff8c1a" : "transparent",
              color: activeButton === "fundTransfer" ? "white" : "black",
            }}
          >
            Fund Transfer
          </div>
          <div
            onClick={() => handleButtonClick("deposit")}
            style={{
              ...styles.sidebarItem,
              backgroundColor: activeButton === "deposit" ? "#ff8c1a" : "transparent",
              color: activeButton === "deposit" ? "white" : "black",
            }}
          >
            Deposit
          </div>
          <div
            onClick={() => handleButtonClick("withdraw")}
            style={{
              ...styles.sidebarItem,
              backgroundColor: activeButton === "withdraw" ? "#ff8c1a" : "transparent",
              color: activeButton === "withdraw" ? "white" : "black",
            }}
          >
            Withdraw
          </div>
          <div
            onClick={handleLogout}
            style={{
              ...styles.sidebarItem,
              backgroundColor: activeButton === "logout" ? "#ff8c1a" : "transparent",
              color: activeButton === "logout" ? "white" : "black",
            }}
          >
            Logout
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "250px", padding: "20px" }}>
        {renderContent()}
      </div>

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

const styles = {
  sidebarItem: {
    cursor: "pointer",
    padding: "8px",
    paddingLeft: "5vh",
    marginBottom: "10px",
    transition: "all 0.3s",
    borderRadius: "5px",
    font: "caption",
    backgroundColor: "transparent",
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
