import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import img from "./Image.png"; 

const Logout = () => {
  const validUser = [
    { username: "Narendra@12", password: "123abc" },
    { username: "harish@879", password: "123abc" },
    { username: "varshitha08@", password: "123abc" },
    { username: "prashanth67@", password: "123abc" },
    { username: "nani04@", password: "123abc" },
  ];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const[isLogin,setLogin]=useState(false)
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const isValid = validUser.some(
      (user) => user.username === username && user.password === password
    );
    if (isValid) {
      setMessage(`Welcome, ${username}! Login successful.`);
      alert(`Welcome, ${username}! Login successful.`);
      setTimeout(() => {
        navigate("/Admin"); 
      }, 1500);
    } else {
      setMessage("Invalid username or password. Please try again.");
      alert("Invalid username or password. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin} id="header">
        <img
          src={img}
          alt="Logo"
          style={{
            height: "15vh",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "20vh",
            borderRadius: "40vh",
          }}
        />
        <h1>Syndicate Bank</h1>
        {message && (
          <p
            style={{
              color: message.startsWith("Welcome") ? "green" : "red",
              marginTop: "20px",
              backgroundColor: "wheat",
            }}
          >
            {message}
          </p>
        )}
        <label htmlFor="username">USER NAME</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter name..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">PASSWORD</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" id="sub" value="LOGIN" />
      </form>
    </div>
  );
};

export default Logout;
