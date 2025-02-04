import React, { useState } from "react";

const FundTransfer = ({ accountDetails, onTransfer }) => {
  const [transferAmount, setTransferAmount] = useState("");
  const [selectedReceiver, setSelectedReceiver] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const receivers = [
    { id: "R001", name: "Alice Smith", balance: 2000 },
    { id: "R002", name: "Bob Johnson", balance: 1500 },
    { id: "R003", name: "Cathy Brown", balance: 1800 },
    { id: "R004", name: "David Miller", balance: 2200 },
    { id: "R005", name: "Emma Wilson", balance: 1900 },
    { id: "R006", name: "Frank Taylor", balance: 2100 },
  ];

  const handleTransfer = () => {
    const amount = parseFloat(transferAmount);

    if (!selectedReceiver) {
      setSuccessMessage("Please select a receiver.");
      return;
    }

    if (amount > 0 && amount <= accountDetails.balance) {
      onTransfer(amount, selectedReceiver);
      setSuccessMessage("Funds transferred successfully!");
      setTransferAmount("");
      setSelectedReceiver("");
    } else {
      setSuccessMessage("Invalid amount or insufficient funds.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.main}>
        <h1>Fund Transfer</h1>
        {successMessage && <p style={styles.successMessage}>{successMessage}</p>}

        <p>Transfer money from one account to another.</p>

        <h2>Sender</h2>
        <p>
          From (Sender): {accountDetails.name} {accountDetails.accountNumber}
        </p>
        <p>
          Current Balance:{" "}
          {accountDetails.balance.toLocaleString("en-US", {
            minimumFractionDigits: 2,
          })}
        </p>

        <h2>Amount to Transfer</h2>
        <input
          type="number"
          value={transferAmount}
          onChange={(e) => setTransferAmount(e.target.value)}
          placeholder="Enter amount to transfer"
          style={styles.input}
        />

        <h2>Receiver</h2>
        <select
          value={selectedReceiver}
          onChange={(e) => setSelectedReceiver(e.target.value)}
          style={styles.select}
        >
          <option value="">Select Receiver</option>
          {receivers.map((receiver) => (
            <option key={receiver.id} value={receiver.id}>
              {receiver.name}
            </option>
          ))}
        </select>

        <p>
          Receiver's Current Balance:{" "}
          {selectedReceiver
            ? receivers
                .find((r) => r.id === selectedReceiver)
                ?.balance.toLocaleString("en-US", { minimumFractionDigits: 2 })
            : 0}
        </p>

        <button
          onClick={handleTransfer}
          style={{
            ...styles.button,
            backgroundColor: isHovered ? "#ff9a68" : "#e97338",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          TRANSFER FUND
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
   
  },
  main: {
    width: "100%",
    maxWidth: "600px", 
    padding: "20px",
    boxSizing: "border-box",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
  },
  input: {
    padding: "10px",
    margin: "10px 0",
    width: "100%",
    fontSize: "1rem",
    boxSizing: "border-box",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  select: {
    padding: "10px",
    margin: "10px 0",
    width: "100%",
    fontSize: "1rem",
    boxSizing: "border-box",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    padding: "15px",
    color: "white",
    border: "none",
    cursor: "pointer",
    width: "100%",
    fontSize: "1rem",
    borderRadius: "5px",
  },
  successMessage: {
    color: "green",
    backgroundColor: "#FFE4C4",
    padding: "10px",
    margin: "10px 0",
    textAlign: "center",
    borderRadius: "5px",
  },
  "@media (max-width: 768px)": {
    main: {
      padding: "10px",
    },
    input: {
      fontSize: "0.9rem",
    },
    select: {
      fontSize: "0.9rem",
    },
    button: {
      fontSize: "0.9rem",
    },
  },
};

export default FundTransfer;
