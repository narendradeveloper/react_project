import React, { useState } from "react";

const CreateAccount = ({ onCreateAccount }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    accountType: "CHECKING ACCOUNT",
    email: "",
    balance: "",
    password: "", // Ensure password field is in formData
  });
  const [accountNumber, setAccountNumber] = useState(""); // State to hold generated account number

  const generateAccountNumber = () => {
    return Math.floor(1000000000 + Math.random() * 9000000000).toString();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAccount = {
      ...formData,
      accountNumber: generateAccountNumber(),
    };
    onCreateAccount(newAccount); 
    setAccountNumber(newAccount.accountNumber); // Set the generated account number
    setFormData({
      fullName: "",
      accountType: "CHECKING ACCOUNT",
      email: "",
      balance: "",
      password: "", // Reset password field after submit
    }); 
  };

  return (
    <div style={{ backgroundColor: "", padding: "20px", borderRadius: "10px", }}>
      <h1>Create  Account</h1>
      <p>Create a new client account</p>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px", }}
      >
        <label style={{ font: "caption", color: "gray" }}>FULL NAME</label>
        <input
          style={{ width :"100vh",font:"caption" }}
          type="text"
          
          name="fullName"
          font="caption"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label style={{ font: "caption", color: "gray" }}>ACCOUNT TYPE</label>
        <select
          style={{ height: "7vh", font: "caption" }}
          name="accountType"
          value={formData.accountType}
          onChange={handleChange}
        >
          <option value="CHECKING ACCOUNT">CHECKING ACCOUNT</option>
          <option value="SAVINGS ACCOUNT">SAVINGS ACCOUNT</option>
        </select>

        <label style={{ font: "caption", color: "gray", }}>INITIAL BALANCE</label>
        <input
          style={{width :"100vh",font:"caption" }}
          type="number"
          name="balance"
          value={formData.balance}
          onChange={handleChange}
          required
        />

        <label style={{ font: "caption", color: "gray" }}>Email ADDRESS</label>
        <input
          style={{width :"100vh",font:"caption"  }}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label style={{ font: "caption", color: "gray" }}>PASSWORD</label>
        <input
          style={{width:"100vh"}}
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {/* Show generated account number after submission */}
        {accountNumber && (
          <div>
            <label style={{ font: "caption", color: "white" }}>Generated Account Number</label>
            <input
              style={{ backgroundColor: "#f1f1f1", color: "black" }}
              type="text"
              value={accountNumber}
              readOnly
            />
          </div>
        )}

        <button
          id="Account"
          style={{
            // width: "100vw",
            height: "7vh",
            color:"white",
            font:"revert-layer",
            backgroundColor: "gray",
            borderStyle: "none",
            opacity: "0.8",
            cursor: "pointer",
            transition: "opacity 0.3s, background-color 0.3s",
          }}
          type="submit"
          onMouseEnter={(e) => {
            e.target.style.opacity = "1"; // Increase opacity on hover
            e.target.style.backgroundColor = "darkgray"; // Change color on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.opacity = "0.8"; // Reset opacity
            e.target.style.backgroundColor = "gray"; // Reset color
          }}
        >
          CREATE ACCOUNT
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
