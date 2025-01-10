import React, { useState } from "react";

const FundTransfer = ({ accountDetails, onTransfer }) => {
  const [transferAmount, setTransferAmount] = useState("");
  const [selectedReceiver, setSelectedReceiver] = useState("");

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
      alert("Please select a receiver.");
      return;
    }

    if (amount > 0 && amount <= accountDetails.balance) {
      onTransfer(amount, selectedReceiver); 
      setTransferAmount(""); 
      setSelectedReceiver(""); 
    } else {
      alert("Invalid transfer amount or insufficient funds!");
    }
  };

  return (
    <div style={{width:"100vh",backgroundColor:"",paddingLeft:"10vh"}}>
    <div style={styles.main}>
      <h1>Fund Transfer</h1>
      <p>Transfer money from one account to another.</p>

      <h2>Sender</h2>
      <p>
        From (Sender): {accountDetails.name} {accountDetails.accountNumber}
      </p>
      <p>Current Balance: {accountDetails.balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}</p>

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
          ? receivers.find((r) => r.id === selectedReceiver)?.balance.toLocaleString("en-US", { minimumFractionDigits: 2 })
          : 0}
      </p>

      <button onClick={handleTransfer} style={styles.button}>
        Transfer Fund
      </button>
    </div>
    </div>
  );
};

const styles = {
  main: { flex: 1, padding: "20px" },
  input: { padding: "10px", margin: "10px 0", width: "100%" },
  select: { padding: "10px", margin: "10px 0", width: "100%" },
  button: { padding: "15px 30px", backgroundColor: "#4CAF50", color: "white", border: "none", cursor: "pointer",width:"100%" },
};

export default FundTransfer;