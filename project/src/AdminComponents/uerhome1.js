import React from "react";

const Userhome1 = ({ accounts }) => {
  return (
    <div>
      <h1>New User Details</h1>
      {accounts.length > 0 ? (
        <div>
          {accounts.map((account, index) => (
            <div
              key={index}
              style={{
                marginBottom: "20px",
                borderBottom: "1px solid #ccc",
                padding: "10px",
                backgroundColor: "#f8f8f8",
                borderRadius: "5px",
              }}
            >
              <h1 style={{ textTransform: "capitalize",textAlign:"start" }}>{account.fullName}</h1>
              <p style={{font:"caption",color:"gray"}}>{account.accountType.toUpperCase()}</p>
              <p style={{font:"caption",color:"gray",fontSize:"4vh"}}>{account.accountNumber}</p>
              <h2 style={{ color: account.balance >= 0 ? "black" : "red" }}>
                {new Intl.NumberFormat().format(account.balance)}
              </h2>
              <button style={{ marginRight: "10px" }}>Edit</button>
              <button>Delete</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No accounts created yet. Please create one!</p>
      )}
    </div>
  );
};

export default Userhome1;
