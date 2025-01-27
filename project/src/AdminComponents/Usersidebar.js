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
    navigate("/admin");
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
          <div onClick={handleLogout} style={styles.sidebarItem}>
            Logout
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "250px", padding: "20px" }}>{renderContent()}</div>
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
};

export default Usersidebar;
