import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import user1 from "./user1.png";

const Loginuser = () => {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [message, setMessage] = useState(""); 
  const navigate = useNavigate(); 

  useEffect(() => {
    const defaultUsers = [
      { username: "User1@example.com", password: "psw456" },
      { username: "User12@example.com", password: "psw456" },
      { username: "User22@example.com", password: "psw456" },
      { username: "User52@example.com", password: "psw456" },
      { username: "User29@example.com", password: "psw456" },
    ];

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (storedUsers.length === 0) {
      localStorage.setItem("users", JSON.stringify(defaultUsers)); 
    }
  }, []);

  const handlelogin = (event) => {
    event.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || []; 

    
    const validUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (validUser) {
      setMessage(`Welcome, ${username}! Login successful.`);
      setTimeout(() => {
        navigate("/Usersidebar"); 
      }, 1500);
    } else {
      setMessage("Invalid username or password. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handlelogin} id="header">
        <img
          src={user1}
          alt="img"
          style={{ height: "15vh", justifyContent: "center", alignItems: "center", paddingLeft: "20vh", borderRadius: "10px" }}
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
         
          <label htmlFor="username"  font="caption">USER NAME</label>
        <input style={{ font:"caption"}}
          type="text"
          id="username"
          name="username"
           font="caption"
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
        <input type="submit" id="submit" value="LOGIN" />
      </form>
    </div>
  );
};

export default Loginuser;
