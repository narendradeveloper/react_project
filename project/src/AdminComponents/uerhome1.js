import React, { useState } from "react";

const Userhome1 = ({ accounts, setAccounts }) => {
  const [isEditing, setIsEditing] = useState(null); // Track the editing state
  const [editedAccount, setEditedAccount] = useState({}); // Store the edited account details

  const handleEditClick = (index) => {
    setIsEditing(index);
    setEditedAccount(accounts[index]); // Load account data for editing
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedAccount({ ...editedAccount, [name]: value }); // Update account data
  };

  const handleSaveClick = () => {
    const updatedAccounts = [...accounts];
    updatedAccounts[isEditing] = editedAccount; // Save the updated account
    setAccounts(updatedAccounts); // Update the state with the new accounts list
    setIsEditing(null); // Exit editing mode
  };

  const handleDeleteClick = (index) => {
    const updatedAccounts = accounts.filter((_, i) => i !== index); // Remove the selected account
    setAccounts(updatedAccounts); // Update the accounts state after deletion
  };

  return (
    <div>
      <h1>User Details</h1>
      {accounts.length > 0 ? (
        accounts.map((account, index) => (
          <div key={index} style={{ marginBottom: "20px", padding: "10px" }}>
            {isEditing === index ? (
              <div>
                <input
                  type="text"
                  name="fullName"
                  value={editedAccount.fullName}
                  onChange={handleEditChange}
                />
                <input
                  type="text"
                  name="accountType"
                  value={editedAccount.accountType}
                  onChange={handleEditChange}
                />
                <input
                  type="number"
                  name="balance"
                  value={editedAccount.balance}
                  onChange={handleEditChange}
                />
                <button onClick={handleSaveClick}>Save</button>
                <button onClick={() => setIsEditing(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                <h2>{account.fullName}</h2>
                <p>{account.accountType}</p>
                <p>{account.accountNumber}</p>
                <h3>{account.balance}</h3>
                <button onClick={() => handleEditClick(index)}>Edit</button>
                <button onClick={() => handleDeleteClick(index)}>Delete</button>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No accounts available.</p>
      )}
    </div>
  );
};

export default Userhome1;
