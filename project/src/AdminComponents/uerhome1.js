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
    
    <div style={{ margin: "0 auto" ,textAlign:"start"}}>
      <h1>User Details</h1>
     <p>Create your account</p>
     
      {isDeleted ? (
        <p style={{ color: "", textAlign: "center" }}>Account deleted</p>
      ) : accounts.length > 0 ? (
        accounts.map((account, index) => (
          <div
            key={index}
            style={{
              marginBottom: "20px",
              padding: "15px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
              width: "260px",
            }}
          >

            
            {isEditing === index ? (
              <div>
                <label>Full Name:</label>
                <input
                  type="text"
                  name="fullName"
                  value={editedAccount.fullName || ""}
                  onChange={handleEditChange}
                  style={{ display: "block", marginBottom: "10px", width: "100%" }}
                />
                <label>Account Type:</label>
                <input
                  type="text"
                  name="accountType"
                  value={editedAccount.accountType || ""}
                  onChange={handleEditChange}
                  style={{ display: "block", marginBottom: "10px", width: "100%" }}
                />
                <label>Balance:</label>
                <input
                  type="number"
                  name="balance"
                  value={editedAccount.balance || ""}
                  onChange={handleEditChange}
                  style={{ display: "block", marginBottom: "10px", width: "100%" }}
                />
      
                  
              </div>
            ) : (
              <div>
                <h2>{account.fullName}</h2>
                <p> {account.accountType}</p>
                <p>Account No: {account.accountNumber}</p>
                <h4>Rs:{account.balance}</h4>
               
                
              </div>
            )}
          </div>
        ))
      ) : (
        <p style={{ textAlign: "center", color: "#888", fontSize: "18px" }}>
        </p>
      )}
    </div>
  );
};

export default Userhome1;
