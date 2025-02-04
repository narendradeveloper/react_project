import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img from "./Image.png";
import bank from "./bank.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  // Handle window resizing
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const styles = {
    container: {
      display: "flex",
      flexDirection: windowWidth <= 768 ? "column" : "row", // Responsive layout based on window width
      height: "100vh",
      position: "relative",
    },
    rightSide: {
      flex: 1,
      padding: windowWidth <= 768 ? "20px" : "40px", // Adjust padding on smaller screens
      paddingRight: windowWidth <= 768 ? "0" : "500px", // Adjust padding on smaller screens
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundImage: `url(${bank})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    form: {
      width: windowWidth <= 768 ? "90%" : "300px", // Form width adjusts based on screen size
      padding: windowWidth <= 768 ? "20px" : "40px", // Padding adjusts for smaller screens
      paddingRight: windowWidth <= 768 ? "0" : "100px", // Adjust padding on smaller screens
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      borderRadius: "50px",
      backgroundColor: "#be7956",
    },
    logo: {
      height: windowWidth <= 480 ? "50px" : "80px", // Adjust logo size on very small screens
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
      width: "90%",
      padding: "10px",
      marginBottom: "15px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      font: "caption",
    },
    submitButton: {
      width: windowWidth <= 768 ? "70%" : "50%", // Button width adjusts on smaller screens
      padding: "10px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      marginLeft: windowWidth <= 768 ? "15%" : "100px", // Adjust button margin on smaller screens
    },
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

export default Login;
