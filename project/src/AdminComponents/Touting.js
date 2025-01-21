import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./loginpage";
import Home from "./Home1";
import Logout from "./Logout";
import Admin from "./admin";
import Loginuser from "./Loginuser";
import Usersidebar from "./Usersidebar";
import Userhome1 from "./uerhome1";
import CreateAccount from "./Createacount";

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/login" element={<Login />} /> {/* Admin Login Page */}
        <Route path="/home" element={<Home />} /> {/* Admin Home */}
        <Route path="/admin" element={<Logout />} /> {/* Logout Page */}
        <Route path="/Loginuser" element={<Loginuser />} /> {/* User Login Page */}
        <Route path="/Usersidebar" element={<Usersidebar />} /> {/* User Sidebar */}
        <Route path="/userhome" element={<Userhome1 />} /> {/* User Home */}
        <Route path="/create-account" element={<CreateAccount />} /> {/* Create Account */}
      </Routes>
    </Router>
  );
};

export default Main;
