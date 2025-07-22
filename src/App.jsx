import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/userPages/Home";
import AdminDashboard from "./pages/adminPages/AdminDashboard";
// import Matches from "./pages/adminPages/Matches";
import AllUsers from "./pages/adminPages/AllUsers";
// import Vlsouttendance from "./pages/adminPages/Vlsouttendance";
// import AllLinks from "./pages/adminPages/AllLinks";
import About from "./pages/userPages/About";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/userPages/PrivacyPolicy";
import Pricing from "./pages/userPages/Pricing";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<AppLayout/>}>
          <Route path="/" element={<Home/>}></Route>
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Route>
        {/* Admin Routes */}
        <Route path="/dashboard" element={<AdminDashboard />}>
          <Route path="all-users" element={<AllUsers />} />
           {/* <Route path="matches" element={<Matches />} />
          <Route path="vlsouttendance" element={<Vlsouttendance />} />
          <Route path="alllinks" element={<AllLinks />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}