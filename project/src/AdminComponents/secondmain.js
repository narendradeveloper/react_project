import React from "react";

const Ain = ({ accountDetails, transactions }) => (
  <div style={styles.main}>
    <h1>My Account</h1>
    <h2>{accountDetails.name}</h2>
    <div style={{display:"flex"}}>
    <div>
    <p style={{color:"gray"}}>SAVING ACCOUNT {accountDetails.accountNumber}</p>
    <p>47290539482</p>
    </div>
    <div>
    <h1 style={{ paddingLeft:"90vh"}}> {accountDetails.balance.toFixed(2)}</h1>
    </div>
    </div>
    <h3>Transactions</h3>
    <ul style={{ listStyleType: "none", padding: 0 }}>
  {transactions.map((transaction, index) => (
    <li 
      style={{
        display: "flex",
        justifyContent: "space-between", 
        alignItems: "center", 
        padding: "10px 0", 
        borderBottom: "1px solid #ccc", 
      }} 
      key={index}
    >
      <span style={{ flex: 1 }}>{transaction.date}</span>
      <span style={{ flex: 2, textAlign: "center" }}>{transaction.description}</span>
      <span style={{ flex: 1, textAlign: "right" }}>
        {transaction.amount.toFixed(2)}
      </span>
    </li>
  ))}
</ul>

  </div>
);

const styles = {
  main: { flex: 1, padding: "20px", overflow: "auto" },
 
  
};

 


 
export default Ain;
