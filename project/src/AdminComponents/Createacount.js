import React, { useState } from "react";

const CreateAccount = ({ onCreateAccount }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    accountType: "CHECKING ACCOUNT",
    email: "",
    balance: "",
    password: "",
  });
  const [accountNumber, setAccountNumber] = useState("");

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
    setAccountNumber(newAccount.accountNumber);
    setFormData({
      fullName: "",
      accountType: "CHECKING ACCOUNT",
      email: "",
      balance: "",
      password: "",
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vh",
        minHeight: "100vh",
        padding: "20px",
        border: "1px solid #ccc",
        
       backgroundColor:"#f9f9f9",
      }}
    >
      <div
        style={{
          backgroundColor: "#f9f9f9",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          width: "100vh",
        }}
      >
        <h1>Create Account</h1>
        <p>Create a new client account</p>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <label style={{ fontSize: "14px", color: "gray" }}>FULL NAME</label>
          <input
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "14px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxSizing: "border-box",
            }}
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label style={{ fontSize: "14px", color: "gray" }}>ACCOUNT TYPE</label>
          <select
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "14px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxSizing: "border-box",
            }}
            name="accountType"
            value={formData.accountType}
            onChange={handleChange}
          >
            <option value="CHECKING ACCOUNT">CHECKING ACCOUNT</option>
            <option value="SAVINGS ACCOUNT">SAVINGS ACCOUNT</option>
            <option value="CURRENT ACCOUNT">CURRENT ACCOUNT</option>
          </select>

          <label style={{ fontSize: "14px", color: "gray" }}>INITIAL BALANCE</label>
          <input
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "14px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxSizing: "border-box",
              font:"caption",
            }}
            type="number"
            name="balance"
            value={formData.balance}
            onChange={handleChange}
            required
          />

          <label style={{ fontSize: "14px", color: "gray" }}>EMAIL ADDRESS</label>
          <input
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "14px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxSizing: "border-box",
              font:"caption"
            }}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label style={{ fontSize: "14px", color: "gray" }}>PASSWORD</label>
          <input
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "14px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxSizing: "border-box",
            }}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {accountNumber && (
            <div>
              <label style={{ fontSize: "14px", color: "gray" }}>
                Generated Account Number
              </label>
              <input
                style={{
                  backgroundColor: "#e65c00",
                  color: "#fff",
                  width: "100%",
                  padding: "10px",
                  fontSize: "14px",
                  border: "none",
                  borderRadius: "5px",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
                type="text"
                value={accountNumber}
                readOnly
              />
            </div>
          )}

          <button
            id="Account"
            style={{
              width: "100%",
              padding: "15px",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              backgroundColor: "#e65c00",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "opacity 0.3s, background-color 0.3s",
            }}
            type="submit"
            onMouseEnter={(e) => {
              e.target.style.opacity = "1";
              e.target.style.backgroundColor = "#d45400";
            }}
            onMouseLeave={(e) => {
              e.target.style.opacity = "0.9";
              e.target.style.backgroundColor = "#e65c00";
            }}
          >
            CREATE ACCOUNT
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
