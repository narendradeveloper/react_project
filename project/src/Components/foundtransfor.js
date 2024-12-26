import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FundTransfer = ({ data, setData }) => {
  const [amount, setAmount] = useState("");
  const [selectedReceiver, setSelectedReceiver] = useState("");
  const navigate = useNavigate();

  const handleTransfer = () => {
    if (!selectedReceiver || amount <= 0) {
      alert("Please select a receiver and enter a valid amount.");
      return;
    }

    if (amount > data.sender.balance) {
      alert("Insufficient funds.");
      return;
    }

    const updatedReceivers = data.receivers.map((receiver) => {
      if (receiver.accountNumber === selectedReceiver) {
        return { ...receiver, balance: receiver.balance + Number(amount) };
      }
      return receiver;
    });

    const receiverDetails = updatedReceivers.find(
      (receiver) => receiver.accountNumber === selectedReceiver
    );

    setData({
      ...data,
      sender: {
        ...data.sender,
        balance: data.sender.balance - Number(amount),
      },
      receivers: updatedReceivers,
      transaction: {
        sender: data.sender,
        receiver: receiverDetails,
        amount,
      },
    });

    navigate("/summary");
  };

  return (
    <div>
      <h2>Fund Transfer</h2>
      <div>
        <strong>Sender:</strong>
        <p>{data.sender.name} #{data.sender.accountNumber}</p>
        <p>Balance: ₱{data.sender.balance.toLocaleString()}</p>
      </div>
      <div>
        <label>Select Receiver:</label>
        <select
          value={selectedReceiver}
          onChange={(e) => setSelectedReceiver(e.target.value)}
        >
          <option value="" disabled>
            -- Select Receiver --
          </option>
          {data.receivers.map((receiver) => (
            <option key={receiver.accountNumber} value={receiver.accountNumber}>
              {receiver.name} #{receiver.accountNumber}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button onClick={handleTransfer}>Transfer Money</button>
    </div>
  );
};

export default FundTransfer;
