import { useEffect } from "react";
import { Card } from "flowbite-react";
import React from "react";
import CustomSidebar from "../../components/ComponentsDashboard/Sidebar";
import CustomNavbar from "../../components/ComponentsDashboard/Navbar";
import CustomSearchbar from "../../components/ComponentsDashboard/Searchbar";
import CustomTabelJenisKategori from "../../components/Jenis&Kategori/TabelJenisKategori"

    export default function JenisKategori() {
      useEffect(() => {
        document.title = "E-Wastepas | Jenis & Kategori";
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
          <div
            className="flex justify-between items-center w-full"
            style={{
              marginBottom: "20px",
              paddingLeft: "20px",
              paddingRight: "20px",
              paddingTop: "20px"
            }}
          >
            <h2 className="text-lg font-bold">Sampah Elektronik yang dapat dijemput</h2>
          </div>
  
            <Card
              style={{ 
                width: "1335px",
                height: "600px"
                }}
            >
  
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-2">
                  <button className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700">
                    Tambah Data
                  </button>
                </div>
                <div className="mt-4 ml-4">
                  <CustomSearchbar style={{ marginRight: "sm-7" }} />
                </div>
                <div className="flex-grow overflow-auto">
                  <CustomTabelJenisKategori/> 
                </div>
            </div>
            </Card>
  
          </div>
  
        </div>
      );
    }