import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/userPages/Home";
import AdminDashboard from "./pages/adminPages/AdminDashboard";

import Batches from "./pages/adminPages/Batches";
import AllUsers from "./pages/adminPages/AllUsers";
import ViewAttendance from "./pages/adminPages/ViewAttendance";
import AllTasks from "./pages/adminPages/AllTasks";
import Task from "./pages/adminPages/Task";
import Pricing from "./pages/userPages/Pricing";
import About from "./pages/userPages/About";
import UserDashboard from "./pages/userPages/UserDashboard";
import Dashboard from "./pages/userPages/Dashboard";
import Leads from "./pages/userPages/Leads";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/dashboard/admin" element={<AdminDashboard />}>
           <Route path="all-users" element={<AllUsers/>} />
        </Route>
        <Route path="/dashboard/user" element={<UserDashboard/>}>
        <Route path="dashboard" element={<Dashboard />}> </Route>
        <Route path="leads" element={<Leads />}> </Route>


        </Route>
      </Routes>
    </Router>
  );
}
