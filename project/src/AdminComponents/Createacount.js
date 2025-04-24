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
    <div className="create-account-container">
      <div className="create-account-form">
        <h1>Create Account</h1>
        <p>Create a new client account</p>
        <form onSubmit={handleSubmit}>
          <label>FULL NAME</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label>ACCOUNT TYPE</label>
          <select name="accountType" value={formData.accountType} onChange={handleChange}>
            <option value="CHECKING ACCOUNT">CHECKING ACCOUNT</option>
            <option value="SAVINGS ACCOUNT">SAVINGS ACCOUNT</option>
            <option value="CURRENT ACCOUNT">CURRENT ACCOUNT</option>
          </select>

          <label>INITIAL BALANCE</label>
          <input
            type="number"
            name="balance"
            value={formData.balance}
            onChange={handleChange}
            required
          />

          <label>EMAIL ADDRESS</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>PASSWORD</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {accountNumber && (
            <div>
              <label>Generated Account Number</label>
              <input type="text" value={accountNumber} readOnly className="generated-account" />
            </div>
          )}

          <button type="submit">CREATE ACCOUNT</button>
        </form>
      </div>

      {/* Responsive CSS */}
      <style>
        {`
          .create-account-container {
            // display: flex;
            justify-content: center;
            align-items: center;
            height: 90%;
            position:absulote;
            padding: 20px;
            background-color: #f9f9f9;
            // width: 150%;
          }

          .create-account-form {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 500px;
          }

          form {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          label {
            font-size: 14px;
            color: gray;
            font-weight: bold;
          }

          input, select {
            width: 100%;
            padding: 10px;
            font-size: 14px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }

          .generated-account {
            background-color: #e65c00;
            color: #fff;
            font-weight: bold;
            text-align: center;
          }

          button {
            width: 100%;
            padding: 15px;
            background-color: #e65c00;
            color: white;
            font-size: 16px;
            font-weight: bold;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background 0.3s;
          }

          button:hover {
            background-color: #d45400;
          }

          /* Responsive Design */
          @media (max-width: 600px) {
            .create-account-form {
              width: 90%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default CreateAccount;
