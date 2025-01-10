import React, { useState } from "react";
import Sidebar from "./saidbar";
import Ain from "./secondmain";
import BudgetPage from "./budget";
import FundTransfer from "./fundtransfor";
import Login from "./loginpage";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [activePage, setActivePage] = useState("Home");
  const navigate = useNavigate(); // For programmatic navigation

  const [accountDetails, setAccountDetails] = useState({
    name: "Michael Jackson",
    accountNumber: "",
    balance: 1000000,
  });

  const [transactions, setTransactions] = useState([
    { date: "2025-01-01", description: "Deposit", amount: 1000 },
    { date: "2025-01-02", description: "Withdrawal", amount: 200 },
  ]);

  const handleFundTransfer = (amount) => {
    const updatedBalance = accountDetails.balance - amount;
    setAccountDetails({ ...accountDetails, balance: updatedBalance });

    const newTransaction = {
      date: new Date().toISOString().split("T")[0],
      description: "Fund Transfer",
      amount: -amount,
    };
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div style={styles.appContainer}>
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      {activePage === "Home" && <Ain accountDetails={accountDetails} transactions={transactions} />}
      {activePage === "Budget" && <BudgetPage />}
      {activePage === "Fund Transfer" && (
        <FundTransfer accountDetails={accountDetails} onTransfer={handleFundTransfer} />
      )}
      {activePage ==="Logout" && <Login/>}
     
    </div>
  );
};

const styles = {
  appContainer: { display: "flex", flexDirection: "row", height: "100vh" },
  logoutButton: {
    position: "absolute",
    bottom: "20px",
    right: "20px",
    padding: "10px 20px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Home;
