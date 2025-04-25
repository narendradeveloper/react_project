import React, { useState } from "react";

const Userhome1 = ({ accounts, setAccounts }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [editedAccount, setEditedAccount] = useState({});
  const [isDeleted, setIsDeleted] = useState(false);

  const handleEditClick = (index) => {
    setIsEditing(index);
    setEditedAccount({ ...accounts[index] });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedAccount({
      ...editedAccount,
      [name]: name === "balance" ? Number(value) : value,
    });
  };

  const handleSaveClick = () => {
    if (isEditing !== null) {
      const updatedAccounts = [...accounts];
      updatedAccounts[isEditing] = editedAccount;
      setAccounts(updatedAccounts);
      setIsEditing(null);
    }
  };

  const handleDeleteClick = (index) => {
    const confirmed = window.confirm("Are you sure you want to delete this user?");
    if (confirmed) {
      const updatedAccounts = accounts.filter((_, i) => i !== index);
      setAccounts(updatedAccounts);
      setIsDeleted(true);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>User Details</h1>
      <p style={{ textAlign: "start" }}>Create your account</p>

      {isDeleted ? (
        <p style={styles.deletedText}>Account deleted</p>
      ) : accounts.length > 0 ? (
        <div style={styles.cardWrapper}>
          {accounts.map((account, index) => (
            <div key={index} style={styles.card}>
              {isEditing === index ? (
                <div>
                  <label>Full Name:</label>
                  <input
                    type="text"
                    name="fullName"
                    value={editedAccount.fullName || ""}
                    onChange={handleEditChange}
                    style={styles.input}
                  />
                  <label>Account Type:</label>
                  <input
                    type="text"
                    name="accountType"
                    value={editedAccount.accountType || ""}
                    onChange={handleEditChange}
                    style={styles.input}
                  />
                  <label>Balance:</label>
                  <input
                    type="number"
                    name="balance"
                    value={editedAccount.balance || ""}
                    onChange={handleEditChange}
                    style={styles.input}
                  />
                </div>
              ) : (
                <div>
                  <h2>{account.fullName}</h2>
                  <p>{account.accountType}</p>
                  <p>Account No: {account.accountNumber}</p>
                  <h4>Rs: {account.balance}</h4>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p style={styles.emptyText}>No accounts found</p>
      )}
    </div>
  );
};

// ✅ Responsive Inline Styles
const styles = {
  container: {
    padding: "1rem",
    boxSizing: "border-box",
  },
  title: {
    fontSize: "1.5rem",
    textAlign: "start",
    marginBottom: "1rem",
  },
  cardWrapper: {
    // display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    
  },
  card: {
    // flex: "1 1 100%", // default 100% width on mobile
    maxWidth: "400px", // limit width on wider screens
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    boxSizing: "border-box",
  },
  input: {
    display: "block",
    marginBottom: "10px",
    width: "100%",
    padding: "0.5rem",
    fontSize: "1rem",
    boxSizing: "border-box",
  },
  deletedText: {
    color: "red",
    textAlign: "center",
  },
  emptyText: {
    textAlign: "center",
    color: "#888",
    fontSize: "1rem",
  },
};

export default Userhome1;
