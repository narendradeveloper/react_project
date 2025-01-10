import React, { useState } from "react";
import AddBudgetModal from "./budgetmodule2";

const BudgetApp = ({ budgets, setBudgets }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);
  const addBudget = (newBudget) => setBudgets([...budgets, newBudget]);

  return (
    <div style={{ flex: 1, padding: "20px", overflow: "auto" }}>
      <h1>Budget App</h1>
      <button
        onClick={toggleModal}
        style={{ background: "#8c6e50", color: "white", padding: "10px 20px", border: "none", cursor: "pointer" }}
      >
        ADD BUDGET
      </button>
      {isModalOpen && <AddBudgetModal closeModal={toggleModal} addBudget={addBudget} />}
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {budgets.map((budget, index) => (
          <li key={index} style={{ display: "flex", justifyContent: "space-between", margin: "5px 0" }}>
            <span>{budget.description}</span>
            <span style={{ fontWeight: "bold" }}>{budget.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BudgetApp;
