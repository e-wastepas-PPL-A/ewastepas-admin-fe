import { useEffect } from "react";
import { Card } from "flowbite-react";
import React from "react";
import CustomSidebar from "../../components/ComponentsDashboard/Sidebar";
import CustomNavbar from "../../components/ComponentsDashboard/Navbar";
import CustomSearchbar from "../../components/ComponentsDashboard/Searchbar";
import TableTWP from "../../components/TotalWastePoint/TableTotalWastePoint";
import { CardTWP } from "../../components/TotalWastePoint/CardTWP";


export default function PageName() {
  useEffect(() => {
    document.title = "E-Wastepas | Permintaan Sampah";
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
            <h1 className="text-lg font-bold">Total Waste & Point</h1>
        </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <CardTWP />
            <div className="mt-8">
              <Card style={{ width: "1200px", height: "600px" }}>
                <div className="flex flex-col h-full">
                  <div className="mt-4 ml-4">
                    <CustomSearchbar style={{ marginRight: "sm-7" }} />
                  </div>
                  <div className="flex-grow overflow-auto">
                    <TableTWP />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
    </div>
  );
}
