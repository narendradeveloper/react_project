import React, { useState, useEffect } from "react";

const Userdeposit = ({ accounts, setAccounts }) => {
  const [selectedAccountIndex, setSelectedAccountIndex] = useState("");
  const [depositAmount, setDepositAmount] = useState("");
  const [message, setMessage] = useState("");
  const [currentBalance, setCurrentBalance] = useState("");
  const [buttonStyles, setButtonStyles] = useState({
    backgroundColor: "#e65c00",
  });

  useEffect(() => {
    if (selectedAccountIndex !== "") {
      const selectedAccount = accounts[selectedAccountIndex];
      setCurrentBalance(selectedAccount.balance);
    } else {
      setCurrentBalance("");
    }
  }, [selectedAccountIndex, accounts]);

  const handleDeposit = () => {
    if (selectedAccountIndex === "" || depositAmount <= 0 || isNaN(depositAmount)) {
      setMessage("Please select an account and enter a valid deposit amount.");
      return;
    }
    const updatedAccounts = [...accounts];
    const selectedAccount = updatedAccounts[selectedAccountIndex];
    selectedAccount.balance += parseFloat(depositAmount);

    setAccounts(updatedAccounts);
    setCurrentBalance(selectedAccount.balance);

    setMessage(`Deposit of ${depositAmount} was successful for ${selectedAccount.fullName}.`);
    setDepositAmount("");
  };

  const handleMouseEnter = () => {
    setButtonStyles({ backgroundColor: "#e65c00" });
  };

  const handleMouseLeave = () => {
    setButtonStyles({ backgroundColor: "#e65c00", opacity: 0.8 });
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "600px",
        width: "100%",
        backgroundColor: "#f9f9f9",
        border: "1px solid #ccc",
        boxSizing: "border-box",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Deposit</h1>

      {message && (
        <div
          style={{
            color: "green",
            fontWeight: "caption",
            textAlign: "center",
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "#FAEBD7",
            marginBottom: "20px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {message}
        </div>
      )}

      <label style={{ font: "caption", color: "gray" }}>SELECT ACCOUNT</label>
      <br />
      <select
        style={{
          height: "7vh",
          width: "100%",
          marginBottom: "10px",
          font: "caption",
        }}
        value={selectedAccountIndex}
        onChange={(e) => setSelectedAccountIndex(e.target.value)}
      >
        <option value="">Select an Account</option>
        {accounts.map((account, index) => (
          <option key={index} value={index}>
            {account.fullName}
          </option>
        ))}
      </select>

      {selectedAccountIndex !== "" && (
        <div>
          <label style={{ font: "caption", color: "gray" }}>Current Balance</label>
          <br />
          <input
            style={{
              height: "6vh",
              marginBottom: "10px",
              width: "100%",
              font: "caption",
            }}
            type="text"
            value={currentBalance}
            readOnly
          />
        </div>
      )}

      <label style={{ font: "caption", color: "gray" }}>Deposit Amount</label>
      <br />
      <input
        style={{
          height: "6vh",
          marginBottom: "10px",
          width: "100%",
          font: "caption",
        }}
        type="number"
        value={depositAmount}
        onChange={(e) => setDepositAmount(e.target.value)}
      />

      <button
        style={{
          height: "7vh",
          marginTop: "10px",
          width: "100%",
          backgroundColor: buttonStyles.backgroundColor,
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          opacity: buttonStyles.opacity,
          transition: "opacity 0.3s",
        }}
        onClick={handleDeposit}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        DEPOSIT
      </button>
    </div>
  );
};

export default Userdeposit;
