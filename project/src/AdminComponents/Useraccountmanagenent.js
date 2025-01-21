import React, { useState } from "react";
import Userhome1 from "./Userhome1";
import CreateAccount from "./CreateAccount"; 

const AccountManagement = () => {
  const [accounts, setAccounts] = useState([]); // State for managing accounts

  const handleCreateAccount = (newAccount) => {
    setAccounts([...accounts, newAccount]); // Add the new account to the list
  };

  return (
    <div>
      <CreateAccount onCreateAccount={handleCreateAccount} />
      {/* Pass both accounts and setAccounts to Userhome1 */}
      <Userhome1 accounts={accounts} setAccounts={setAccounts} />
    </div>
  );
};

export default AccountManagement;
