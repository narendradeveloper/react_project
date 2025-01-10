import React, { useState } from "react";

const AddBudgetModal = ({ closeModal, addBudget }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    if (description && amount) addBudget({ description, amount });
    closeModal();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "400px",
          width: "90%",
        }}
      >
        <h2>Add Budget</h2>
        <label>
          Description
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ display: "block", width: "100%", marginBottom: "10px", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </label>
        <label>
          Amount
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ display: "block", width: "100%", marginBottom: "10px", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </label>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
          <button onClick={closeModal} style={{ padding: "10px 20px", background: "#ccc", border: "none", cursor: "pointer" }}>
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            style={{ padding: "10px 20px", background: "#8c6e50", color: "white", border: "none", cursor: "pointer" }}
          >
            Add Budget
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBudgetModal;
