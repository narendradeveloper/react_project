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
  };

  const handleLogout = () => {
    navigate("/admin"); // Redirect to the Admin page after logout
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

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "250px",
          backgroundColor: "LightGray",
          height: "100vh",
          position: "fixed",
          overflowY: "auto",
          paddingTop: "10px",
          marginLeftLeft:"10px"
        }}
      >
        <h2 style={{ paddingLeft: "10px", marginTop: "5vh" }}>Syndicate Bank</h2>
        <div>
          <div
            onClick={() => setActivePage("home")}
            style={styles.sidebarItem}
          >
            Home
          </div>
          <div
            onClick={() => setActivePage("createAccount")}
            style={styles.sidebarItem}
          >
            Create Account
          </div>
          <div
            onClick={() => setActivePage("fundTransfer")}
            style={styles.sidebarItem}
          >
            Fund Transfer
          </div>
          <div
            onClick={() => setActivePage("deposit")}
            style={styles.sidebarItem}
          >
            Deposit
          </div>
          <div
            onClick={() => setActivePage("withdraw")}
            style={styles.sidebarItem}
          >
            Withdraw
          </div>
          <div
            onClick={handleLogout}
            style={styles.sidebarItem}
          >
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
    marginBottom: "10px", // Gap between buttons
    transition: "all 0.3s ease",
    borderRadius: "5px",
    color: "black", 
    font:"caption"
  },
};

export default Usersidebar;
