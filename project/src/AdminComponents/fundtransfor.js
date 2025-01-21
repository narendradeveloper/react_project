import React, { useState } from "react";

const FundTransfer = ({ accountDetails, onTransfer }) => {
  const [transferAmount, setTransferAmount] = useState("");
  const [selectedReceiver, setSelectedReceiver] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const [isHovered, setIsHovered] = useState(false); // State for hover effect

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
      setSuccessMessage ("Invalid amount or insufficient funds.");
    }
  };

  return (
    <div style={{width:"100vh"}}>
    <div style={{ width: "100vh", paddingLeft: "10vh" }}>
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
            backgroundColor: isHovered ? "darkblue" : "blue",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          TRANSFER FUND
        </button>
      </div>
    </div>
    </div>
  );
};

const styles = {
  main: { flex: 1, padding: "20px" },
  input: {
    padding: "10px",
    margin: "10px 0",
    width: "100vh",
    font: "caption",
    height: "4vh",
  },
  select: {
    padding: "10px",
    margin: "10px 0",
    width: "105vh",
    font: "caption",
    height: "7vh",
  },
  button: {
    padding: "15px 30px",
    color: "white",
    border: "none",
    cursor: "pointer",
    width: "105vh",
    font: "caption",
  },
  successMessage: {
    color: "green",
    // margin: "40px 0",
    backgroundColor:"#FFE4C4",
    width:"105vh",
    textAlign :"center",
    
    
  },
};


export default FundTransfer;
