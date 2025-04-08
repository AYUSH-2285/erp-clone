import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Fees from "./pages/Fees";
import Attendance from "./pages/Attendance";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main-content">
          <Sidebar />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/fees" element={<Fees />} />
              <Route path="/attendance" element={<Attendance />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
