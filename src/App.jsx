import React from "react";
import CustomSidebar from "./components/Sidebar"; 
import CustomNavbar from "./components/Navbar"; 

// Sidebar component
export function Sidebar1() {
  return (
    <div className="Sidebar" style={{ display: "flex", height: "100vh"}}>
      <CustomSidebar />
    </div>
  );
}

// Navbar component
export function Navbar1() {
  return (
    <div>
      <CustomNavbar />
    </div>
  );
}

// Main App component
function App() {
  return (
    <div>
      <Navbar1 />  
      <Sidebar1 />  
      <div className="content" style={{ marginLeft: "260px", padding: "20px" }}>
        <p>yyy</p>  
      </div>
    </div>
  );
}

export default App;
