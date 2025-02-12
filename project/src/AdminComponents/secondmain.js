import React from "react";

const Ain = ({ accountDetails, transactions }) => (
  <div style={styles.container}>
    <div style={styles.main}>
      <h1>My Account</h1>
      <h2>{accountDetails.name}</h2>
      <div style={styles.accountInfo}>
        <div>
          <p style={styles.accountType}>SAVING ACCOUNT {accountDetails.accountNumber}</p>
          <p>47290539482</p>
        </div>
        <div>
          <h1 style={styles.balance}>RS.{accountDetails.balance.toFixed()}</h1>
        </div>
      </div>
      <h3>Transactions</h3>
      <ul style={styles.transactionList}>
        {transactions.map((transaction, index) => (
          <li style={styles.transactionItem} key={index}>
            <span style={styles.transactionDate}>{transaction.date}</span>
            <span style={styles.transactionDescription}>{transaction.description}</span>
            <span style={styles.transactionAmount}>Rs. {transaction.amount.toFixed()}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    boxSizing: "border-box",
    backgroundColor: "#f9f9f9", 
  },
  main: {
    width: "100%",
    maxWidth: "600px", 
    padding: "20px",
    boxSizing: "border-box",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
  },
  accountInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: "20px",
  },
  accountType: {
    color: "gray",
    margin: 0,
  },
  balance: {
    paddingLeft: "20px",
    fontSize: "1.5rem",
    whiteSpace: "nowrap",
  },
  transactionList: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  transactionItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    borderBottom: "1px solid #ccc",
    flexWrap: "wrap",
  },
  transactionDate: {
    flex: 1,
    minWidth: "100px",
    textAlign: "left",
  },
  transactionDescription: {
    flex: 2,
    minWidth: "150px",
    textAlign: "center",
  },
  transactionAmount: {
    flex: 1,
    minWidth: "100px",
    textAlign: "right",
  },
  "@media (max-width: 768px)": {
    accountInfo: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
    balance: {
      paddingLeft: "0",
      textAlign: "left",
      fontSize: "1.2rem",
    },
    transactionItem: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
    transactionDate: {
      marginBottom: "5px",
    },
    transactionDescription: {
      marginBottom: "5px",
    },
  },
};

export default Ain;
