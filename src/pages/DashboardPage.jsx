import { useEffect } from "react";
import React from "react";
import CustomSidebar from "../components/Sidebar";
import CustomNavbar from "../components/Navbar";

// Sidebar component
export function Sidebar1() {
  return (
    <div className="Sidebar" style={{
      position: "fixed", 
      left: 0, 
      top: 0, 
      width: "260px", 
      height: "100vh", 
      backgroundColor: "#f8f9fa" 
    }}>
      <CustomSidebar />
    </div>
  );
}

// Navbar component
export function Navbar1() {
  return (
    <div style={{ position: "fixed", top: 0, left: "260px", right: 0, height: "60px", backgroundColor: "#343a40", color: "#fff" }}>
      <CustomNavbar />
    </div>
  );
}

export default function PageName() {
  useEffect(() => {
    document.title = "E-Wastepas | Dashboard";
  }, []);

  return (
    <div>
      <Navbar1 />
      <Sidebar1 />

      {/* Konten utama dashboard */}
      <div className="content" 
        style={{ 
          marginLeft: "260px",
          marginTop: "60px",
          padding: "20px", 
          minHeight: "calc(100vh - 60px)", 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center" 
        }}>
        <h1 className="text-3xl font-bold underline">
          Halaman Dashboard Admin!
        </h1> 
      </div>
    </div>
  );
}
