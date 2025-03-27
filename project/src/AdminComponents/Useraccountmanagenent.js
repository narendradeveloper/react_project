import React, { useState } from "react";
import Userhome1 from "./Userhome1";
import CreateAccount from "./CreateAccount"; 

const AccountManagement = () => {
  const [accounts, setAccounts] = useState([]); 

  const handleCreateAccount = (newAccount) => {
    setAccounts([...accounts, newAccount]); 
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
