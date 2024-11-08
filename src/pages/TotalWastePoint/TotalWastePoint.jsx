import { useEffect } from "react";
import { Card } from "flowbite-react";
import React from "react";
import CustomSidebar from "../../components/ComponentsDashboard/Sidebar";
import CustomNavbar from "../../components/ComponentsDashboard/Navbar";
import CustomSearchbar from "../../components/ComponentsDashboard/Searchbar";
import TableTWP from "../../components/TotalWastePoint/TableTotalWastePoint";
import { CardTWP } from "../../components/TotalWastePoint/CardTWP";


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
    document.title = "E-Wastepas | Permintaan Sampah";
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
            }}>Total Waste & Point</h1>

        {/* Konten utama Permintaan Sampah */}
        <div className="content" 
            style={{ 
                marginLeft: "300px",
                marginTop: "60px",
                padding: "20px", 
                minHeight: "calc(100vh - 60px)", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center" 
            }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <CardTWP />
                <Card style={{ width: "1200px", height: "600px", marginTop: "20px" }}>
                    <CustomSearchbar style={{ marginRight: "sm-7" }} />
                    <TableTWP />
                </Card>
            </div>



        </div>
    </div>
  );
}
