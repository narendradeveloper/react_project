import React, { useState } from "react";
// import Sidebar from "./side";
import Home from "./Homepage";
import BudgetApp from "./budget2";

const Hello= () => {
  const [activePage, setActivePage] = useState("Home");
  const [budgets, setBudgets] = useState([]);

  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      {/* <Sidebar activePage={activePage} setActivePage={setActivePage} /> */}
      {activePage === "Home" ? (
        <Home />
      ) : (
        <BudgetApp budgets={budgets} setBudgets={setBudgets} />
      )}
    </div>
  );
};

export default Hello;
