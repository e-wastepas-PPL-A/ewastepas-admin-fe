import { useEffect } from "react";
import React from "react";
import CustomSidebar from "../components/ComponentsDashboard/Sidebar";
import CustomNavbar from "../components/ComponentsDashboard/Navbar";

// Sidebar component
// export function Sidebar1() {
//   return (
//     <div className="Sidebar" style={{
//       position: "fixed", 
//       left: 0, 
//       top: 0, 
//       width: "260px", 
//       height: "100vh", 
//       backgroundColor: "#f8f9fa" 
//     }}>
//       <CustomSidebar />
//     </div>
//   );
// }

// Navbar component
// export function Navbar1() {
//   return (
//     <div style={{ position: "fixed", top: 0, left: "260px", right: 0, height: "60px", backgroundColor: "#343a40", color: "#fff" }}>
//       <CustomNavbar />
//     </div>
//   );
// }

export default function PageName() {
  useEffect(() => {
    document.title = "E-Wastepas | Dashboard";
  }, []);

  return (
    <div 
      className="flex w-full"
      style={{
        position: "fixed", 
        left: 0, 
        top: 0, 
        width: "260px", 
        height: "100vh", 
        backgroundColor: "#f8f9fa",
        overflowY: "auto"
      }}  
    >
      <CustomSidebar />
      <div 
        className="flex-1"
        style={{ position: "fixed", top: 0, left: "260px", right: 0, height: "60px" }}
      >
        <CustomNavbar/>
      </div>
    </div>
  );
}
