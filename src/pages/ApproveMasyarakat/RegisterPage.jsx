import { useEffect } from "react";
import { Card } from "flowbite-react";
import React from "react";
import CustomSidebar from "../../components/ComponentsDashboard/Sidebar.jsx";
import CustomNavbar from "../../components/ComponentsDashboard/Navbar.jsx";
import CustomTableMasyarakat from "../../components/ApproveMasyarakat/TableApproveMasyarakat.jsx";
import CustomSearchbar from "../../components/ComponentsDashboard/Searchbar.jsx";


export default function Register() {
  useEffect(() => {
    document.title = "E-Wastepas | Registrasi Masyarakat";
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
          <h2 className="text-lg font-bold">Approval</h2>
          <h1 className="text-lg font-bold">Registrasi Masyarakat</h1>
        </div>

          <Card> 
            <div className="flex flex-col h-full">
              {/* <div className="mt-4 ml-4">
                <CustomSearchbar style={{ marginRight: "sm-7" }} />
              </div> */}
              <div className="flex-grow overflow-auto">
                <CustomTableMasyarakat/> 
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
}