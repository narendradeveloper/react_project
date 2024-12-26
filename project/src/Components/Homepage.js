import React from "react";
import "./style.css"


const SummaryPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h2 style={styles.bankName}>Syndicate Bank</h2>
        <nav style={styles.nav}>
          <p style={styles.navItem}>Home</p>
          <p style={styles.navItem}>Budget App</p>
          <p style={styles.navItem}>Fund Transfer</p>
          <p style={styles.navItem}>Logout</p>
        </nav>
      </div>

      <div style={styles.mainContent}>
        <h1 style={styles.title}>My Account</h1>
        <div style={styles.accountDetails}>
          <p style={styles.my}> Michael Jackson</p>
          <p style={styles.mysave}> Savings Peso</p>
          <p style={styles.mysave}>47290539482</p>
          <div style={{display:"flex"}}>
          <p style={styles.myaccountamount}> 330,830.22</p>
          </div>
        </div>
        <h2 style={styles.transactionsTitle}>Transactions</h2>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "'Arial', sans-serif",
  },
  sidebar: {
    backgroundColor: "gray",
    width: "250px",
    padding: "20px",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  bankName: {
    marginBottom: "20px",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  
  navItem: {
    cursor: "pointer",
    color: "white",
    margin: 0,
    padding: "10px",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  },
  mainContent: {
    flex: 1,
    padding: "40px",
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  accountDetails: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
 
  myaccountamount :{
    color:"black",
    fontSize:"5vh"

  },
  my:{
    fontSize:"large"

  },
   mysave:{
color:"rgb(134, 139, 139)"
   }
};

export default SummaryPage;
