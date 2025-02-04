import React, { useState } from 'react';

const AddBudgetModal = ({ closeModal, addBudget }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    if (description && amount) addBudget({ description, amount });
    closeModal();
  };

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <h2>Add Budget</h2>
        <label>
          Description
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={styles.input}
          />
        </label>
        <label>
          Amount
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={styles.input}
          />
        </label>
        <div style={styles.modalButtons}>
          <button onClick={closeModal} style={styles.cancelBtn}>Cancel</button>
          <button onClick={handleSubmit} style={styles.addBtn}>Add Budget</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  modalOverlay: { position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center" },
  modalContent: { background: "white", padding: "20px", borderRadius: "8px", maxWidth: "400px", width: "90%" },
  input: { display: "", width: "100%", marginBottom: "10px", padding: "8px", borderRadius: "4px", border: "1px solid #ccc",font:"caption", },
  modalButtons: { display: "flex", justifyContent: "space-between", marginTop: "20px" },
  cancelBtn: { padding: "10px 20px", background: "#ccc", border: "none", cursor: "pointer" },
  addBtn: { padding: "10px 20px", background: "#ff9a68", color: "white", border: "none", cursor: "pointer" }
};

export default AddBudgetModal;
