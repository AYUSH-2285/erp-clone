import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={{ width: "200px", background: "#eee", padding: "1rem" }}>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/fees">Fees</Link></li>
        <li><Link to="/attendance">Attendance</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
