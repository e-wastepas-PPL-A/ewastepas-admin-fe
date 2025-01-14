import { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import CustomSidebar from "../../components/ComponentsDashboard/Sidebar";
import CustomNavbar from "../../components/ComponentsDashboard/Navbar";
import CustomSearchbar from "../../components/ComponentsDashboard/Searchbar";
import { HiArrowLeft } from "react-icons/hi";
import CustomTableDetailPoint from "../../components/DetailPoint/TableDetailPoint";
import axios from "axios";
import { useParams } from "react-router-dom"; 

export default function PageName() {
  const { pickup_id } = useParams();
  const [pickupDetails, setPickupDetails] = useState(null);
  const [pickup, setPickup] = useState(null);

  useEffect(() => {
    document.title = "E-Wastepas | Permintaan Sampah";
    
    axios.get(`http://34.16.66.175:8031/api/total-poin/${pickup_id}`)
      .then(response => {
        if (response.data.success) {
          setPickupDetails(response.data.data); 
          setPickup(response.data); 
        }
      })
      .catch(error => {
        console.error("Error fetching pickup details:", error);
      });
  }, [pickup_id]);

  if (!pickupDetails) {
    return <div>Loading...</div>; 
  }

  const { community, total_point, pickup_detail } = pickupDetails;

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
        style={{ position: "fixed", top: 0, left: "260px", right: 0, height: "100vh" }}
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
          <h1 style={{
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
        </div>
        
        <div className="border-t border-gray-300 my-4"></div>
        
        <div className="grid grid-cols-2 gap-4 ml-6">
          <div>
            <p className="font-bold">Nama</p>
            <p>{community.name}</p>
          </div>
          <div>
            <p className="font-bold">Alamat</p>
            <p>{community.address}</p>
          </div>
          <div>
            <p className="font-bold">Nomor HP</p>
            <p>{community.phone}</p>
          </div>
          <div>
            <p className="font-bold">Total Poin</p>
            <p>{total_point}</p>
          </div>
        </div>
        
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px", height: "calc(100% - 60px - 80px)" }}>
          <div className="mt-8 w-full">
            <Card className="h-full">
              <div className="flex flex-col h-full">
                <div className="mt-4 ml-4">
                  {/* <CustomSearchbar style={{ marginRight: "sm-7" }} /> */}
                </div>
                <div className="flex-grow overflow-auto">
                <CustomTableDetailPoint pickupDetail={pickup_detail} />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
