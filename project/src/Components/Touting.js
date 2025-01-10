import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import Login from "./loginpage";
// import { useHref } from "react-router-dom";
import Home from "./Homepage";
// import Hello from "./hii";
import Hello2 from "./hii2";


const Main = () => {
  const [data, setData] = useState({
    sender: {
      name: "Juan dela Cruz",
      accountNumber: "47290539482",
      balance: 50000,
    },
    receivers: [
      { name: "Peter de Castro", accountNumber: "47290539483", balance: 10000 },
      { name: "Maria Santos", accountNumber: "47290539484", balance: 15000 },
      { name: "Anna Lopez", accountNumber: "47290539485", balance: 20000 },
      { name: "John Reyes", accountNumber: "47290539486", balance: 25000 },
      { name: "James Smith", accountNumber: "47290539487", balance: 30000 },
    ],
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Hello2" element={<Hello2/>}/>
        
      </Routes>
    </Router>
  );
};
export default Main;
