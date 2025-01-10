// App.js
import React, { useState } from "react";

const Summery = () => {
  const [activePage, setActivePage] = useState("Home");  

  return (
    <div style={styles.appContainer}>
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      {activePage === "Home" && <Main />}  {/* Display Home if active page is Home */}
      {activePage === "Budget" && <BudgetPage />}  {/* Display Budget if active page is Budget */}
      {activePage === "Fund Transfer" && <FundTransfer />}  {/* Display Fund Transfer if active page is Fund Transfer */}
    </div>
  );
};

const Sidebar = ({ activePage, setActivePage }) => (
  <div style={styles.sidebar}>
    <h2 style={styles.sidebarHeading}>Avion Bank</h2>
    <ul style={styles.sidebarList}>
      {['Home', 'Budget', 'Fund Transfer', 'Logout'].map((page) => (
        <li
          key={page}
          style={{ ...styles.sidebarItem, fontWeight: activePage === page ? "bold" : "normal" }}
          onClick={() => setActivePage(page)}  // Update active page on click
        >
          {page}
        </li>
      ))}
    </ul>
  </div>
);

const Main = () => (
  <div style={styles.main}>
    <h1>Welcome</h1>
    <p>Select a menu option to get started!</p>
  </div>
);

const BudgetPage = () => {
  const [budgets, setBudgets] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);
  const addBudget = (newBudget) => setBudgets([...budgets, newBudget]);

  return (
    <div style={styles.main}>
      <h1>Budget App</h1>
      <button onClick={toggleModal} style={styles.addBudgetBtn}>ADD BUDGET</button>
      {isModalOpen && <AddBudgetModal closeModal={toggleModal} addBudget={addBudget} />}
      <ul style={styles.budgetList}>
        {budgets.map((budget, index) => (
          <li key={index} style={styles.budgetItem}>
            <span>{budget.description}</span>
            <span style={styles.amount}>{budget.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const AddBudgetModal = ({ closeModal, addBudget }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    if (description && amount) addBudget({ description, amount });
    closeModal();
  };

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <h2>Add Budget</h2>
        <label>
          Description
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={styles.input}
          />
        </label>
        <label>
          Amount
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={styles.input}
          />
        </label>
        <div style={styles.modalButtons}>
          <button onClick={closeModal} style={styles.cancelBtn}>Cancel</button>
          <button onClick={handleSubmit} style={styles.addBtn}>Add Budget</button>
        </div>
      </div>
    </div>
  );
};

const FundTransfer = () => (
  <div style={styles.main}>
    <h1>Fund Transfer</h1>
    <p>Initiate your fund transfer here.</p>
  </div>
);

const styles = {
  appContainer: { display: "flex", flexDirection: "row", height: "100vh" },
  sidebar: { width: "250px", background: "#3e2b1b", color: "white", padding: "20px" },
  sidebarHeading: { marginBottom: "20px" },
  sidebarList: { listStyleType: "none", padding: 0 },
  sidebarItem: { margin: "10px 0", cursor: "pointer" },
  main: { flex: 1, padding: "20px", overflow: "auto" },
  addBudgetBtn: { background: "#8c6e50", color: "white", padding: "10px 20px", border: "none", cursor: "pointer" },
  modalOverlay: { position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center" },
  modalContent: { background: "white", padding: "20px", borderRadius: "8px", maxWidth: "400px", width: "90%" },
  modalButtons: { display: "flex", justifyContent: "space-between", marginTop: "20px" },
  cancelBtn: { padding: "10px 20px", background: "#ccc", border: "none", cursor: "pointer" },
  addBtn: { padding: "10px 20px", background: "#8c6e50", color: "white", border: "none", cursor: "pointer" },
  input: { display: "block", width: "100%", marginBottom: "10px", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" },
  budgetList: { listStyleType: "none", padding: 0 },
  budgetItem: { display: "flex", justifyContent: "space-between", margin: "5px 0" },
  amount: { fontWeight: "bold" },
};

export default Summery;
