import React, { useState } from "react";
import Sidebar from "./saidbar";
import Ain from "./secondmain";
import BudgetPage from "./budget";
import FundTransfer from "./fundtransfor";
import Login from "./loginpage";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [activePage, setActivePage] = useState("Home");
  const navigate = useNavigate();

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
      <div style={styles.mainContent}>
        {activePage === "Home" && <Ain accountDetails={accountDetails} transactions={transactions} />}
        {activePage === "Budget" && <BudgetPage />}
        {activePage === "Fund Transfer" && (
          <FundTransfer accountDetails={accountDetails} onTransfer={handleFundTransfer} />
        )}
        {activePage === "Logout" && <Login />}
      </div>
    </div>
  );
};

const styles = {
  appContainer: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
    width: "auto",
  },
  mainContent: {
    flex: 1,
    padding: "20px",
    overflowY: "auto",
    boxSizing: "border-box",
  },
  "@media (max-width: 768px)": {
    appContainer: {
      flexDirection: "column", 
    },
    mainContent: {
      padding: "10px",
    },
  },
  "@media (max-width: 480px)": {
    appContainer: {
      flexDirection: "column",
    },
    mainContent: {
      padding: "5px",
    },
  },
};

export default Home;
