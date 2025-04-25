import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img from "./Image.png";
import bank from "./bank.png";
import { BsJustify } from "react-icons/bs";

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
      setTimeout(() => navigate("/Home"), 1500);
    } else {
      setMessage("Invalid username or password. Please try again.");
    }
  };

  const handleGuestLogin = () => {
    navigate("/Home");
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: windowWidth <= 768 ? "column" : "row",
      height: "100vh",
      position: "relative",
    },
    rightSide: {
      flex: 1,
      padding: "40px",
      // paddingRight: windowWidth <= 600 ? "0" : "100px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundImage: `url(${bank})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    form: {
      width:  "190px",
height:"400px",
      padding:  "40px",
      paddingRight:  "90px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      borderRadius: "20px",
      backgroundColor: "#be7956",
    },
    logo: {
      height: windowWidth <= 480 ? "50px" : "80px",
      display: "block",
      margin: "0 auto 20px auto",
      borderRadius: "50%",
    },
    title: {
      // textAlign: "center",
      // width:"110px",
      marginBottom: "10px",
      color: "white",
    },
    label: {
      display: "block",
      marginBottom: "5px",
      fontWeight: "bold",
    },
    input: {
      width: "120%",
      padding: "10px",
      marginBottom: "15px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      font: "caption",
    },
    gest: {
      backgroundColor: "#e95c15",
      width: "100%",
      display:"flex",
      border: "none",
      borderRadius: "5px",
      color: "white",
      cursor: "pointer",
      marginLeft:"30px"
      
    },
    dp: {
      display: "flex",
      gap: "3px",
      // width:"100%",
      justifycontente:"speace-between",
    },
    submitButton: {
      width: "200%",
      padding: "10px",
      backgroundColor: "#e95c15",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      marginLeft: "10px",
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
          <div style={styles.dp}>
            <input
              type="submit"
              id="sub"
              value=" USER LOGIN"
              style={styles.submitButton}
            />
            
            <input
              type="button" 
              value=" USER LOGIN"
              style={styles.gest}
              onClick={handleGuestLogin} 
            />
              {/* GUEST LOGIN */}
            {/* </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
