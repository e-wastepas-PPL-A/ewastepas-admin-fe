import { useEffect } from "react";
import { Card } from "flowbite-react";
import React from "react";
import CustomSidebar from "../components/Sidebar";
import CustomNavbar from "../components/Navbar";
import CustomSearchbar from "../components/Searchbar";
import CustomTabelKurir from "../components/TableApproveKurir"

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

  export default function RegisterKurir() {
    useEffect(() => {
      document.title = "E-Wastepas | Registrasi Kurir";
    }, []);
  
      return (
  
        <div className="bg-gray-100">
          <Navbar1 />
          <Sidebar1 />
  
          <div className="content" 
            style={{ 
              marginLeft: "260px",
              marginTop: "60px",
              padding: "20px", 
              minHeight: "calc(100vh - 60px)", 
              display: "flex", 
              justifyContent: "center", 
              alignItems: "center" ,
              flexDirection: "column"
            }}
          >
  
          <div
            className="flex justify-between items-center w-full"
            style={{
              marginBottom: "20px",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            <h2 className="text-lg font-bold">Approval</h2>
            <h1 className="text-lg font-bold">Registrasi Kurir</h1>
          </div>
  
            <Card
              style={{ 
                width: "1300px",
                height: "600px"
                }}
            >
              <CustomSearchbar style={{ marginRight: "sm-7" }}/>
              <CustomTabelKurir/> 
            </Card>
  
          </div>
  
        </div>
      );
  }