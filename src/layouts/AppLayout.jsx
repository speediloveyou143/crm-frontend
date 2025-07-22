import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Home from "../pages/userPages/Home";

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      
    </div>
  );
}
