import React, { useState } from "react";
import CreateAccount from "./Createacount";
import Userhome1 from "./uerhome1";

const Usersidebar = () => {
  const [accounts, setAccounts] = useState([]); 
  const [activePage, setActivePage] = useState("home"); 
  const [selectedAccount, setSelectedAccount] = useState(null); 

  const handleCreateAccount = (newAccount) => {
    setAccounts([...accounts, newAccount]); 
    setActivePage("home"); 
  };

  const handleFundTransfer = () => {
    alert("Fund transfer functionality will be implemented."); 
  };

  const handleDeposit = () => {
    alert("Deposit functionality will be implemented."); 
  };

  const handleWithdraw = () => {
    alert("Withdraw functionality will be implemented.");
  };

  const handleLogout = () => {
    alert("You have logged out!"); 
    setActivePage("home"); 
  };

  const sidebarStyle = {
    width: "250px",
    backgroundColor: "LightGray",
    color: "block",
    height: "100vh",
    padding: "20px",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "black",
    display: "block",
    margin: "10px 0",
    padding: "10px",
    // backgroundColor: "#665544",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const renderContent = () => {
    switch (activePage) {
      case "home":
        return <Userhome1 accounts={accounts} />;
      case "createAccount":
        return <CreateAccount onCreateAccount={handleCreateAccount} />;
      case "fundTransfer":
        return (
          <div>
            <h2>Fund Transfer</h2>
            <p>Fund transfer functionality will be displayed here.</p>
          </div>
        );
      case "deposit":
        return (
          <div>
            <h2>Deposit</h2>
            <p>Deposit functionality will be displayed here.</p>
          </div>
        );
      case "withdraw":
        return (
          <div>
            <h2>Withdraw</h2>
            <p>Withdraw functionality will be displayed here.</p>
          </div>
        );
      default:
        return <div>Select a page.</div>;
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={sidebarStyle}>
        <h2>Syndicate Bank</h2>
        <div style={linkStyle} onClick={() => setActivePage("home")}>
          Home
        </div>
        <div style={linkStyle} onClick={() => setActivePage("createAccount")}>
          Create Account
        </div>
        <div style={linkStyle} onClick={() => setActivePage("fundTransfer")}>
          Fund Transfer
        </div>
        <div style={linkStyle} onClick={() => setActivePage("deposit")}>
          Deposit
        </div>
        <div style={linkStyle} onClick={() => setActivePage("withdraw")}>
          Withdraw
        </div>
        <div style={linkStyle} onClick={handleLogout}>
          Logout
        </div>
      </div>
      <div style={{ padding: "20px", flex: 1 }}>{renderContent()}</div>
    </div>
  );
};

export default Usersidebar;
