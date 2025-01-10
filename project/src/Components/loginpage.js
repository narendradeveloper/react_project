// import React from "react";
import "./style.css";
import img from "./Image.png"

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const validUser = [
    { username: "Narendra@12", password: "123abc" },
    { username: "harish@879", password: "123abc" },
    { username: "varshitha08@", password: "123abc" },
    { username: "prashanth67@", password: "123abc" },
    { username: "nani04@", password: "123abc" },
  ];

  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handlelogin = (event) => {
    event.preventDefault();

    const isvalid = validUser.some(
      (user) => user.username === username && user.password === password
    );
    if (isvalid) {
      setMessage(`Welcome, ${username}! Login successful.`);
      alert(`Welcome, ${username}! Login successful.`)
      setTimeout(() => {
        navigate("/home");
      }, 1500);
    } else {
      setMessage("Invalid username or password. Please try again.");
      alert("Invalid username or password. Please try again.")
    }
  };

  return (
    <div>
      <form onSubmit={handlelogin} id="header">
        <img
          src={img}
          alt="img"
          style={{ height: "15vh",justifyContent:"center",alignItems:"center", paddingLeft:"20vh",borderRadius:"40vh"}}
        ></img>
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
        <label For="username">USER NAME</label>
        <input
          type="text"
          id="username"
          name="username"
           placeholder="Entername..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label For="password">PASSWORD</label>
        <input
          type="password"
          id="password"
          name="password"
           placeholder="EnterPassword..."
          onChange={(e) => setpassword(e.target.value)}
        />
        <input type="submit" id="sub" value="LOGIN" />
      </form>
    </div>
  );
};

export default Login;
