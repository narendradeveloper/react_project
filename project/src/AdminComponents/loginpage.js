import "./style.css";
import img from "./Image.png";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const defaultUser = { username: "admin@gmail.com", password: "123abc" };
                       


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedCredentials = localStorage.getItem("userCredentials");
    if (!storedCredentials) {
      localStorage.setItem("userCredentials", JSON.stringify(defaultUser));
    }
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();

    const storedCredentials = JSON.parse(localStorage.getItem("userCredentials"));

    if (
      storedCredentials.username === username &&
      storedCredentials.password === password
    ) {
      setMessage(`Welcome, ${username}! Login successful.`);

      setTimeout(() => {
        navigate("/home");
      }, 1500);
    } else {
      setMessage("Invalid username or password. Please try again.");
    }
  };

  return (

      <div style={styles.rightSide}>
        <form onSubmit={handleLogin} style={styles.form}>
          <img src={img} alt="Bank Logo" style={styles.logo} />
          <h1 style={styles.title}>Syndicate Bank</h1>
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
          <label htmlFor="username" style={styles.label}>
            USER NAME
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter username..."
            style={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password" style={styles.label}>
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password..."
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="submit"
            id="sub"
            value="LOGIN"
            style={styles.submitButton}
          />
        </form>
      </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
    backgroundColor: "#f8f9fa",
  },
  leftSide: {
    padding: "20px",
    backgroundColor: "#e9ecef",
    borderRight: "1px solid #ccc",
    textAlign: "left",
    fontSize: "16px",
    lineHeight: "1.8",
  },
  rightSide: {
    flex: 1,
    padding: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "300px",
    padding: "20px",
    backgroundColor: "white",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
  },
  logo: {
    height: "80px",
    display: "block",
    margin: "0 auto 20px auto",
    borderRadius: "50%",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#343a40",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    font:"caption",
  },
  submitButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Login;
