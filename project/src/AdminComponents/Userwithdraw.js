import React, { useState } from "react";

const Userwithdraw = ({ accounts = [], setAccounts }) => {
  const [selectedAccountIndex, setSelectedAccountIndex] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [message, setMessage] = useState("");
  const [currentBalance, setCurrentBalance] = useState("");
  const [isHovered, setIsHovered] = useState(false); 

  const handleAccountChange = (e) => {
    const index = e.target.value;
    setSelectedAccountIndex(index);
    if (index !== "") {
      const selectedAccount = accounts[index];
      setCurrentBalance(selectedAccount.balance);
    } else {
      setCurrentBalance("");
    }
  };

  const handleWithdraw = () => {
    if (selectedAccountIndex === "" || withdrawAmount <= 0 || isNaN(withdrawAmount)) {
      setMessage("Please select an account and enter a valid withdrawal amount.");
      return;
    }

    const updatedAccounts = [...accounts];
    const selectedAccount = updatedAccounts[selectedAccountIndex];

    if (selectedAccount.balance < withdrawAmount) {
      setMessage("Insufficient balance for withdrawal.");
      return;
    }

    selectedAccount.balance -= parseFloat(withdrawAmount);
    setAccounts(updatedAccounts);
    setCurrentBalance(selectedAccount.balance); 

    setMessage(`Withdrawal of ${withdrawAmount} was successful for ${selectedAccount.fullName}.`);
    setWithdrawAmount(""); 
  };

  const buttonStyle = {
    height: "7vh",
    marginTop: "10px",
    width: "103vh",
    backgroundColor: isHovered ? "gray" : "gray", 
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    opacity: isHovered ? 1 : 0.6, 
    transition: "background-color 0.3s, opacity 0.3s", 
  };

  return (
    <div style={{ width: "100vh", paddingLeft: "25px" }}>
      <h1>Withdraw</h1>
      {message && (
        <div
          style={{
            color: "gray",
            fontWeight: "bold",
            textAlign: "center",
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "#FAEBD7",
          }}
        >
          {message}
        </div>
      )}

      <label style={{ font: "caption", color: "gray" }}>SELECT ACCOUNT</label>
      <select
        style={{ height: "7vh", width: "100%", marginBottom: "10px", font: "caption" }}
        value={selectedAccountIndex}
        onChange={handleAccountChange}
      >
        <option style={{ font: "caption", color: "gray" }} value="">
          Select an Account
        </option>
        {accounts.length > 0 ? (
          accounts.map((account, index) => (
            <option key={index} value={index}>
              {account.fullName}
            </option>
          ))
        ) : (
          <option value="" disabled>
            No accounts available
          </option>
        )}
      </select>

      {selectedAccountIndex !== "" && (
        <div>
          <label>Current Balance</label>
          <input
            style={{ height: "7vh", marginBottom: "10px", width: "100%", font: "caption" }}
            type="text"
            value={currentBalance}
            readOnly
          />
        </div>
      )}

      <label style={{ font: "caption", color: "gray" }}>Withdrawal Amount</label>
      <input
        style={{ height: "7vh", marginBottom: "10px", width: "100%", font: "caption" }}
        type="number"
        value={withdrawAmount}
        onChange={(e) => setWithdrawAmount(e.target.value)}
        placeholder="Enter amount"
      />

      <button
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} 
        onClick={handleWithdraw}
      >
        WITHDRAW
      </button>
    </div>
  );
};

export default Userwithdraw;
