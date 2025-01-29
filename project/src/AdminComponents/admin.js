import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const [adminData, setAdminData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [userData, setUserData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [message, setMessage] = useState("");
  const [activeForm, setActiveForm] = useState(null);
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  useEffect(() => {
    if (!localStorage.getItem("adminAccounts")) localStorage.setItem("adminAccounts", JSON.stringify([]));
    if (!localStorage.getItem("userAccounts")) localStorage.setItem("userAccounts", JSON.stringify([]));
  }, []);

  const register = (type) => {
    setMessage("");
    const data = type === "admin" ? adminData : userData;

    if (!data.name || !data.email || !data.password || !data.confirmPassword) {
      setMessage(" All fields are required!");
      return;
    }
    if (data.password !== data.confirmPassword) {
      setMessage(" Passwords do not match!");
      return;
    }

    const key = type === "admin" ? "adminAccounts" : "userAccounts";
    let accounts = JSON.parse(localStorage.getItem(key)) || [];
    const existingAccount = accounts.find((acc) => acc.email === data.email);

    if (existingAccount) {
      setMessage(` ${type === "admin" ? "Admin" : "User"} already registered! Click Sign In.`);
      return;
    }

    accounts.push(data);
    localStorage.setItem(key, JSON.stringify(accounts));
    setMessage(" Registration successful! Redirecting to login...");
    
    setTimeout(() => navigate(type === "admin" ? "/login" : "/loginuser"));
  };

  const signIn = (type) => {
    setMessage("");
    const key = type === "admin" ? "adminAccounts" : "userAccounts";
    let accounts = JSON.parse(localStorage.getItem(key)) || [];
    const data = type === "admin" ? adminData : userData;

    const existingAccount = accounts.find((acc) => acc.email === data.email);

    if (existingAccount) {
      setMessage(" Redirecting to login...");
      setTimeout(() => navigate(type === "admin" ? "/login" : "/loginuser"));
    } else {
      setMessage(` ${type === "admin" ? "Admin" : "User"} not found! Please register.`);
    }
  };

  const handleFormSwitch = (type) => {
    setActiveForm(type);
    setMessage("");
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div style={styles.firstheader}>
      <div style={styles.wrapper}>
        <div style={styles.container}>
          <div style={styles.user}>
            <h3 style={styles.header}> ADMIN REGISTER ACCOUNT</h3>
            <input type="text" placeholder="Name" style={styles.input} onChange={(e) => setAdminData({ ...adminData, name: e.target.value })} />
            <input type="email" placeholder="Email..." style={styles.input} onChange={(e) => setAdminData({ ...adminData, email: e.target.value })} />
            <input type="password" placeholder="Password" style={styles.input} onChange={(e) => setAdminData({ ...adminData, password: e.target.value })} />
            <input type="password" placeholder="Confirm-password" style={styles.input} onChange={(e) => setAdminData({ ...adminData, confirmPassword: e.target.value })} />
            <button
              style={isHovered ? styles.buttonHover : styles.button} 
              onClick={() => register("admin")}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              REGISTER
            </button>
          </div>
          <p style={styles.signInText}>
            Already have an account? <span onClick={() => { handleFormSwitch("admin"); signIn("admin"); }} style={styles.link}>Sign In</span>
          </p>
          {activeForm === "admin" && message && <p style={styles.message}>{message}</p>}
        </div>

        <div style={styles.container}>
          <div style={styles.user}>
            <h3 style={styles.header}> USER REGISTER ACCOUNT</h3>
            <input type="text" placeholder="Name" style={styles.input} onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
            <input type="email" placeholder="Email..." style={styles.input} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
            <input type="password" placeholder="Password" style={styles.input} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
            <input type="password" placeholder="Confirm-password" style={styles.input} onChange={(e) => setUserData({ ...userData, confirmPassword: e.target.value })} />
            <button
              style={isHovered ? styles.buttonHover : styles.button} 
              onClick={() => register("user")}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              REGISTER
            </button>
          </div>
          <p style={styles.signInText}>
            Already have an account? <span onClick={() => { handleFormSwitch("user"); signIn("user"); }} style={styles.link}>Sign In</span>
          </p>
          {activeForm === "user" && message && <p style={styles.message}>{message}</p>}
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "50px",
    padding: "20px",
    minHeight: "100vh",
    backgroundImage: "linear-gradient(to bottom right, red, yellow)",
  },
  container: {
    backgroundColor: "#a84517",
    borderRadius: "10px",
    padding: "20px",
    width: "350px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  user: {
    display: "grid",
    rowGap: "20px",
  },
  header: {
    color: "white",
    textAlign: "center",
    fontSize: "20px",
    fontFamily: "'Arial', sans-serif",
  },
  input: {
    width: "80%",
    borderRadius: "10px",
    border: "none",
    height: "20px",
    backgroundColor: "",
    outline: "none",
    padding: "10px",
    margin: "auto",
  },
  button: {
    width: "80%",
    height: "40px",
    backgroundColor: "blue",
    borderRadius: "10px",
    border: "none",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    marginLeft: "35px",
    transition: "background-color 0.3s, transform 0.2s",
    opacity: "0.4",  // Normal opacity
  },
  buttonHover: {
    width: "80%",
    height: "40px",
    backgroundColor: "red", // Hover color
    borderRadius: "10px",
    border: "none",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    marginLeft: "35px",
    transform: "scale(1.05)", // Hover effect
    opacity: 0.1, // Reduced opacity on hover
  },
  signInText: {
    paddingLeft: "30px",
    color: "white",
    fontFamily: "'Arial', sans-serif",
  },
  link: {
    cursor: "pointer",
    textDecoration: "underline",
    fontWeight: "bold",
  },
  message: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "10px",
  },
};

export default Admin;
