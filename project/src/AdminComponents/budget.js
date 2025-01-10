// components/BudgetPage.js
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
      <p>Start budgeting your money with our built in app.</p>
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

const styles = {
  main: { flex: 1, padding: "20px" },
  addBudgetBtn: { background: "DodgerBlue", color: "white", padding: "10px 20px", border: "none", cursor: "pointer" },
  budgetList: { listStyleType: "none", padding: 0 },
  budgetItem: { display: "flex", justifyContent: " space-around", margin: "5px 0",paddingright:"20px" },
  amount: { fontWeight: "" }
};

export default BudgetPage;
