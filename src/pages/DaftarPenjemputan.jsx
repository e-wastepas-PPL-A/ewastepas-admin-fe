import { useEffect } from "react";
import { Card } from "flowbite-react";
import React from "react";
import CustomSidebar from "../components/Sidebar";
import CustomNavbar from "../components/Navbar";
import CustomTable from "../components/TableDaftarPenjemputan";
import CustomSearchbar from "../components/Searchbar";


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
    document.title = "E-Wastepas | Daftar Penjemputan";
  }, []);


  return (
    <div className="bg-gray-100">
      <Navbar1 />
      <Sidebar1 />

      <h1 style={{
         marginLeft: "1200px", 
         marginTop: "60px", 
         marginBottom: "-80px",
         padding: "20px",
         fontSize: "24px", 
         fontWeight: "bold" 
         }}>Daftar Penjemputan</h1>

      {/* Konten utama Daftar Penjemputan */}
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

        <Card
          style={{ 
            width: "1300px",
            height: "600px"
            }}>
          <CustomSearchbar style={{ marginRight: "sm-7" }}/>
          <CustomTable /> 
        </Card>

      </div>
    </div>
  );
}
