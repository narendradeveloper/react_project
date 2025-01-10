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
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/Loginuser" element = {<Loginuser/>}/>

        <Route path="/" element={<Loginuser />} /> {/* Login Page */}
        <Route path="/Usersidebar" element={<Usersidebar />} />
         <Route path="home" element={<Userhome1 />} />
         <Route path="create-account" element={<CreateAccount />} />
      </Routes>
    </Router>
  );
};

export default Main;
