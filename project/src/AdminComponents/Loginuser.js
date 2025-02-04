import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import user from "./user1.png";
import bank from "./bank.png";

const LoginUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const userAccounts = JSON.parse(localStorage.getItem("userAccounts")) || [];
    const user = userAccounts.find(
      (acc) => acc.email === username && acc.password === password
    );

    if (user) {
      setMessage(`Welcome, ${username}! User login successful.`);
      setTimeout(() => navigate("/Usersidebar"));
    } else {
      setMessage("Invalid username or password. Please try again.");
    }
  };

  // Function for handling guest login
  const handleGuestLogin = () => {
    navigate("/Usersidebar");
  };

  return (
    <div style={styles.container}>
      <div style={styles.rightSide}>
        <form onSubmit={handleLogin} style={styles.form}>
          <img src={user} alt="" style={styles.logo} />
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
              value="LOGIN"
              style={styles.submitButton}
            />
            <button
              type="button"
              style={styles.guest}
              onClick={handleGuestLogin} // Trigger guest login
            >
              GUEST LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  dp: {
    display: "flex",
    gap: "30px",
  },
  guest: {
    width: "40%",
    height: "100%",
    backgroundColor: "#ddb722",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    color: "white",
    textAlign: "center",
    font:"large",
  },
  rightSide: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: `url(${bank})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    padding: "20px",
    justifyContent: "center",
    width: "100%",
  },
  form: {
    width: "50%",
    maxWidth: "400px",
    padding: "40px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    borderRadius: "30px",
    backgroundColor: "#b67352",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  logo: {
    height: "100px",
    width: "100px",
    display: "block",
    margin: "0 auto 20px auto",
    borderRadius: "20px",
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
    justifyContent: "start",
    textAlign: "start",
  },
  input: {
    width: "80%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    font: "caption",
    marginLeft: "0px",
  },
  submitButton: {
    width: "40%",
    padding: "10px",
    backgroundColor: "#ddb722",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transform: "scale(1.05)",
    gap: "5px",
  },
  "@media (max-width: 768px)": {
    container: {
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    rightSide: {
      padding: "15px",
    },
    form: {
      padding: "20px",
      maxWidth: "100%",
      boxShadow: "none",
    },
    submitButton: {
      width: "80%",
      marginLeft: "10%",
    },
    logo: {
      height: "80px",
      width: "80px",
    },
  },
  "@media (max-width: 480px)": {
    container: {
      flexDirection: "column",
      justifyContent: "flex-start",
    },
    rightSide: {
      padding: "10px",
    },
    form: {
      padding: "15px",
      width: "90%",
      boxShadow: "none",
    },
    submitButton: {
      width: "90%",
      marginLeft: "5%",
    },
    logo: {
      height: "70px",
      width: "70px",
    },
  },
};

export default LoginUser;
