import React, { useState } from 'react';
import AddBudgetModal from './budgetmodul';

const BudgetPage = () => {
  const [budgets, setBudgets] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);
  const addBudget = (newBudget) => setBudgets([...budgets, newBudget]);

  return (
    <div style={styles.main}>
      <h1>Budget App</h1>
      <p>Start budgeting your money with our built-in app.</p>
      <button onClick={toggleModal} style={styles.addBudgetBtn}>ADD BUDGET</button>
      {isModalOpen && <AddBudgetModal closeModal={toggleModal} addBudget={addBudget} />}
      <ul style={styles.budgetList}>
        {budgets.map((budget, index) => (
          <li key={index} style={styles.budgetItem}>
            <span>{budget.description}</span>
            <span style={styles.amount}>Rs. {budget.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  main: {
    flex: 1,
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto", 
    overflow: "auto",
  },
  addBudgetBtn: {
    background: "#f18047",
    color: "white",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px", 
    fontSize: "1rem",
    margin: "10px 0",
  },
  budgetList: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  budgetItem: {
    display: "flex",
    justifyContent: "space-between", 
    alignItems: "center",
    padding: "10px 15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    margin: "5px 0",
    flexWrap: "wrap", 
  },
  amount: {
    fontWeight: "bold",
    color: "black",
    fontSize: "1rem",
  },
  
  "@media (max-width: 768px)": {
    main: {
      padding: "10px",
    },
    addBudgetBtn: {
      width: "100%",
      fontSize: "0.9rem",
      padding: "10px",
    },
    budgetItem: {
      flexDirection: "column", 
      alignItems: "flex-start",
    },
    amount: {
      marginTop: "5px",
      textAlign: "right",
    },
  },
};

export default BudgetPage;
