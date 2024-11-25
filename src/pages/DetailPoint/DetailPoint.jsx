import { useEffect } from "react";
import { Card } from "flowbite-react";
import React from "react";
import CustomSidebar from "../../components/ComponentsDashboard/Sidebar";
import CustomNavbar from "../../components/ComponentsDashboard/Navbar";
import { useParams } from 'react-router-dom';
import CustomTableDetailPoint from "../../components/DetailPoint/TableDetailPoint";
import { HiArrowLeft, HiBackspace, HiChat, HiEye, HiLocationMarker, HiPhone } from "react-icons/hi";

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
    const { pickup_id } = useParams();
    useEffect(() => {
        document.title = "E-Wastepas | Detail Point";
    }, []);


    return (
        <div className="bg-gray-100">
        <Navbar1 />
        <Sidebar1 />

        <h1 style={{
            marginLeft: "300px", 
            marginTop: "60px", 
            marginBottom: "-100px",
            padding: "20px",
            fontSize: "24px", 
            fontWeight: "bold" 
            }}>
                <a 
                    href="/back-to-point" 
                    className="flex items-center text-black px-4 py-2 rounded-md"
                >
                    <HiArrowLeft className="w-5 h-5 mr-2" />
                    Detail Point
                </a>

        </h1>

        {/* Konten utama Permintaan Sampah */}
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
                

        
            <div className="flex flex-col h-full" style={{ width: '1300px', height: '600px' }}>
            <div class="border-t border-gray-300 my-4"></div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-bold">Name</p>
                <p>Faqih</p>
              </div>
              <div>
                <p className="font-bold">Address</p>
                <p>Jl. Ngawi no 111</p>
              </div>
              <div>
                <p className="font-bold">Phone Number</p>
                <p>0823456789</p>
              </div>
              <div>
                <p className="font-bold">Total Point</p>
                <p>50</p>
              </div>
            </div>
            <div class="border-t border-gray-300 my-4"></div>
                <div className="flex-grow overflow-auto mt-5">
                    <CustomTableDetailPoint />
                </div>
            </div>

        
        </div>
        </div>
    );
}
