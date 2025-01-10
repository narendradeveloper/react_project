import React, { useState } from "react";

const CreateAccount = ({ onCreateAccount }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    accountType: "CHECKING ACCOUNT",
    email: "",
    balance: "",
  });

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
    setFormData({
      fullName: "",
      accountType: "CHECKING ACCOUNT",
      email: "",
      balance: "",
    }); 
  };
  <div>
Account.style{
    
}
  </div>
  

  return (
    <div>
      <h2>Create a new client account</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" ,width:"70%"}}
      >
        <label style={{font:"caption",color:"gray", width:"100%"}}>FULL NAME</label>
        <input style={{width:"100%"}}
          type="text"
          name="fullName"
          text="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        
        <label style={{font:"caption",color:"gray", width:"100%"}}>ACCOUNT TYPE</label>
        <select style={{height:"7vh"}}
          name="accountType"
          value={formData.accountType}
          onChange={handleChange}
        >
          <option style ={{font:"caption",color:""}} value="checking Account ">CHECKING ACCOUNT</option>
          <option  style ={{font:"caption",color:""}} value="savings Account">SAVINGS ACCOUNT</option>
        </select>

          <label style={{width:"100%",font:"caption",color:"gray"}}>INITIAL BALANCE</label>
        <input style={{width:"100%"}}
          type="number"
          name="balance"
          value={formData.balance}
          onChange={handleChange}
          required
        />
        
        <label style={{font:"caption",color:"gray"}}>Email ADDRESS</label>
        <input style={{width:"100%"}}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label style={{font:"caption",color:"gray"}}>PASSWORD</label>
        <input style={{width:"100%"}}
        type ="password" 
        name ="password"
        value ={formData.password}
        onChange={handleChange}
        required
        />
        
    <button id="Account" style={{width:"100%",height:"7vh",backgroundColor:"gray", borderStyle:"none", opacity:"0.8 vh"}} type="submit">Create Account</button>
      </form>
    </div>
    
  );
};

export default CreateAccount;
