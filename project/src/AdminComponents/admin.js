import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const [adminData, setAdminData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [userData, setUserData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [message, setMessage] = useState("");
  const [activeForm, setActiveForm] = useState("admin");  // Track which form is active
  const [isHoveredAdmin, setIsHoveredAdmin] = useState(false);
  const [isHoveredUser, setIsHoveredUser] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("adminAccounts")) localStorage.setItem("adminAccounts", JSON.stringify([]));
    if (!localStorage.getItem("userAccounts")) localStorage.setItem("userAccounts", JSON.stringify([]));
  }, []);

  const register = (type) => {
    setMessage("");  // Clear previous message
    const data = type === "admin" ? adminData : userData;

    // Only show the message when details are provided
    if (data.name || data.email || data.password || data.confirmPassword) {
      if (!data.name || !data.email || !data.password || !data.confirmPassword) {
        setMessage("All fields are required!");
        return;
      }
      if (data.password !== data.confirmPassword) {
        setMessage("Passwords do not match!");
        return;
      }

      const key = type === "admin" ? "adminAccounts" : "userAccounts";
      let accounts = JSON.parse(localStorage.getItem(key)) || [];
      const existingAccount = accounts.find((acc) => acc.email === data.email);

      if (existingAccount) {
        setMessage(`${type === "admin" ? "Admin" : "User"} already registered! Click Sign In.`);
        return;
      }

      accounts.push(data);
      localStorage.setItem(key, JSON.stringify(accounts));
      setMessage("Registration successful! Redirecting to login...");

      localStorage.setItem(`${type}Registered`, "true");
      
      setTimeout(() => navigate(type === "admin" ? "/login" : "/loginuser"));
    } else {
      setMessage("Please enter the registration details.");
    }
  };

  const handleFormSwitch = (type) => {
    setMessage("");  // Clear message when switching forms

    const isAlreadyRegistered = localStorage.getItem(`${type}Registered`);
    
    // If already registered, navigate directly to login page
    if (isAlreadyRegistered) {
      navigate(type === "admin" ? "/login" : "/loginuser");
    } else {
      setActiveForm(type);
    }
  };

  const handleMouseEnterAdmin = () => setIsHoveredAdmin(true);
  const handleMouseLeaveAdmin = () => setIsHoveredAdmin(false);

  const handleMouseEnterUser = () => setIsHoveredUser(true);
  const handleMouseLeaveUser = () => setIsHoveredUser(false);

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
              style={isHoveredAdmin ? styles.buttonHover : styles.button}
              onClick={() => register("admin")}
              onMouseEnter={handleMouseEnterAdmin}
              onMouseLeave={handleMouseLeaveAdmin}
            >
              REGISTER
            </button>
          </div>
          <p style={styles.signInText}>
            Already have an account? <span onClick={() => { handleFormSwitch("admin"); }} style={styles.link}>Sign In</span>
          </p>
          {message && <p style={styles.message}>{message}</p>}
        </div>

        <div style={styles.container}>
          <div style={styles.user}>
            <h3 style={styles.header}> USER REGISTER ACCOUNT</h3>
            <input type="text" placeholder="Name" style={styles.input} onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
            <input type="email" placeholder="Email..." style={styles.input} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
            <input type="password" placeholder="Password" style={styles.input} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
            <input type="password" placeholder="Confirm-password" style={styles.input} onChange={(e) => setUserData({ ...userData, confirmPassword: e.target.value })} />
            <button
              style={isHoveredUser ? styles.buttonHover : styles.button}
              onClick={() => register("user")}
              onMouseEnter={handleMouseEnterUser}
              onMouseLeave={handleMouseLeaveUser}
            >
              REGISTER
            </button>
          </div>
          <p style={styles.signInText}>
            Already have an account? <span onClick={() => { handleFormSwitch("user"); }} style={styles.link}>Sign In</span>
          </p>
          {message && <p style={styles.message}>{message}</p>}
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
    borderRadius: "30px",
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
    backgroundColor: "white",
    outline: "none",
    padding: "10px",
    margin: "auto",
  },
  button: {
    width: "40%",
    height: "40px",
    backgroundColor: "#d5249a",
    borderRadius: "10px",
    border: "none",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    marginLeft: "95px",
    textAlign: "center",
    transition: "background-color 0.3s, transform 0.2s",
  },
  buttonHover: {
    width: "40%",
    height: "40px",
    backgroundColor: "green",
    borderRadius: "10px",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
    marginLeft: "95px",
    transform: "scale(1.05)",
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
