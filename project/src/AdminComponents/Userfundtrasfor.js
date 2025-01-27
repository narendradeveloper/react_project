import React, { useState } from "react";

const UserfundTransfer = ({ accounts, setAccounts }) => {
  const [senderIndex, setSenderIndex] = useState("");
  const [receiverIndex, setReceiverIndex] = useState("");
  const [transferAmount, setTransferAmount] = useState("");
  const [message, setMessage] = useState({ text: "", color: "", backgroundColor: "" });

  const handleTransfer = () => {
    if (senderIndex === "" || receiverIndex === "" || transferAmount === "" || transferAmount <= 0) {
      setMessage({
        text: "Please fill all fields correctly.",
        color: "red",
        backgroundColor: "#FAEBD7",
      });
      return;
    }

    if (senderIndex === receiverIndex) {
      setMessage({
        text: "Sender and receiver cannot be the same!",
        color: "red",
        backgroundColor: "#FAEBD7",
      });
      return;
    }

    const updatedAccounts = [...accounts];
    const sender = updatedAccounts[senderIndex];
    const receiver = updatedAccounts[receiverIndex];

    if (sender.balance < transferAmount) {
      setMessage({
        text: "Insufficient balance!",
        color: "red",
        backgroundColor: "#FAEBD7",
      });
      return;
    }

    sender.balance -= parseFloat(transferAmount);
    receiver.balance += parseFloat(transferAmount);

    setAccounts(updatedAccounts);

    setMessage({
      text: `Fund transfer of ${transferAmount} from ${sender.fullName} to ${receiver.fullName} was successful!`,
      color: "green",
      backgroundColor: "#FAEBD7",
    });

    setTransferAmount("");
    setSenderIndex("");
    setReceiverIndex("");
  };

  return (
    <div style={{ paddingLeft: "7vh", width: "100vh", display: "flex", justifyContent: "center", backgroundColor: "#f9f9f9"  , border: "1px solid #ccc" }}>
      <div style={{ maxWidth: "800px", width: "100%" }}>
        <h1>Fund Transfer</h1>

        {message.text && (
          <div
            style={{
              color: message.color,
              backgroundColor: message.backgroundColor,
              textAlign: "center",
              padding: "10px",
              borderRadius: "5px",
              marginBottom: "20px",
            }}
          >
            {message.text}
          </div>
        )}

        <div>
          <h2>Sender</h2>
          <label style={{ font: "caption", color: "gray" }}>FROM (SENDER)</label>
          <br />
          <select
            style={{ height: "7vh", width: "96%", marginBottom: "10px" }}
            value={senderIndex}
            onChange={(e) => setSenderIndex(e.target.value)}
          >
            <option value="">Select Sender</option>
            {accounts.map((account, index) => (
              <option style={{ font: "caption" }} key={index} value={index}>
                {account.fullName}
              </option>
            ))}
          </select>
          <br />

          <label style={{ font: "caption", color: "gray" }}>Sender's Current Balance</label>
          <br />
          <input
            style={{
              height: "5vh",
              marginBottom: "10px",
              width: "95vh",
              color: "gray",
              font: "caption",
            }}
            type="text"
            value={senderIndex !== "" ? accounts[senderIndex].balance : ""}
            readOnly
          />

          {/* Receiver Selection */}
          <h2>Receiver</h2>
          <label style={{ font: "caption", color: "gray" }}>TO (RECEIVER)</label>
          <br />
          <select
            style={{
              height: "7vh",
              width: "96%",
              marginBottom: "10px",
              font: "caption",
            }}
            value={receiverIndex}
            onChange={(e) => setReceiverIndex(e.target.value)}
          >
            <option value="">Select Receiver</option>
            {accounts.map((account, index) => (
              <option style={{ font: "caption" }} key={index} value={index}>
                {account.fullName}
              </option>
            ))}
          </select>
          <br />

          <label style={{ font: "caption", color: "gray" }}>Receiver's Current Balance</label>
          <br />
          <input
            style={{
              height: "5vh",
              marginBottom: "10px",
              width: "95%",
              font: "caption",
              color: "gray",
            }}
            type="text"
            value={receiverIndex !== "" ? accounts[receiverIndex].balance : ""}
            readOnly
          />

          <h2>Amount to Transfer</h2>
          <input
            style={{ height: "7vh", marginBottom: "10px", width: "95%", font: "caption" }}
            type="number"
            value={transferAmount}
            onChange={(e) => setTransferAmount(e.target.value)}
            placeholder="Enter amount"
          />
          <button
            style={{
              height: "7vh",
              marginTop: "10px",
              width: "100vh",
              backgroundColor: "#e65c00",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              opacity: "0.8",
              transition: "opacity 0.3s, background-color 0.3s",
            }}
            onClick={handleTransfer}
            onMouseEnter={(e) => {
              e.target.style.opacity = "1";
              e.target.style.backgroundColor = "#e65c00";
            }}
            onMouseLeave={(e) => {
              e.target.style.opacity = "0.8";
              e.target.style.backgroundColor = "#e65c00";
            }}
          >
            TRANSFER FUND
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserfundTransfer;
