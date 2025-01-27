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
    <div style={styles.container}>
      <form onSubmit={handlelogin} style={styles.form}>
        <img
          src={user1}
          alt="img"
          style={styles.image}
        />
        <h1 style={styles.title}>Syndicate Bank</h1>
        {message && (
          <p
            style={{
              ...styles.message,
              color: message.startsWith("Welcome") ? "green" : "red",
            }}
          >
            {message}
          </p>
        )}

        <label htmlFor="username" style={styles.label}>USER NAME</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter name..."
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />

        <label htmlFor="password" style={styles.label}>PASSWORD</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter password..."
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <input type="submit" id="submit" value="LOGIN" style={styles.button} />
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f4f4f9",
    padding: "20px",
  },
  form: {
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  image: {
    height: "15vh",
    display: "block",
    margin: "0 auto 20px",
    borderRadius: "10px",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333333",
  },
  message: {
    marginTop: "20px",
    textAlign: "center",
    backgroundColor: "#FFE4C4",
    padding: "10px",
    borderRadius: "5px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    color: "#333333",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#e65c00",
    color: "#ffffff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
  },
  "@media (max-width: 768px)": {
    form: {
      maxWidth: "90%",
    },
    image: {
      height: "12vh",
    },
  },
};

export default Loginuser;
