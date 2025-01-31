import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img from "./Image.png";
import bank from "./bank.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const adminAccounts = JSON.parse(localStorage.getItem("adminAccounts")) || [];
    const userAccounts = JSON.parse(localStorage.getItem("userAccounts")) || [];

    const admin = adminAccounts.find(
      (acc) => acc.email === username && acc.password === password
    );
    const user = userAccounts.find(
      (acc) => acc.email === username && acc.password === password
    );

    if (admin) {
      setMessage(`Welcome, ${username}! Admin login successful.`);
      setTimeout(() => navigate("/home"), 1500);
    } else if (user) {
      setMessage(`Welcome, ${username}! User login successful.`);
      setTimeout(() => navigate("/Usersidebar"), 1500);
    } else {
      setMessage("Invalid username or password. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
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
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
    position: "relative",
  },
  rightSide: {
    flex: 1,
    padding: "40px",
    paddingRight: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: `url(${bank})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  form: {
    width: "300px",
    padding: "40px",
    paddingRight: "100px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    borderRadius: "50px",
    backgroundColor:"#be7956"
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
    color: "white",
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
    font: "caption",
  },
  submitButton: {
    width: "50%",
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft:"100px",
  },
};

export default Login;