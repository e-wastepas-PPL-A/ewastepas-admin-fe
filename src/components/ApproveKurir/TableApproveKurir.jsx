import { HiCheck, HiX } from "react-icons/hi";
import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import axios from "axios";
import CustomPopUp from "./PopUpApprovalKurir";
import CustomPopUpReject from "./PopUpRejectKurir";

function ImageModal({ url, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full">
        <button onClick={onClose} className="text-red-500 float-right">X</button>
        <img src={url} alt="KTP/KK" className="w-full h-auto" />
      </div>
    </div>
  );
}

export default function CourierApprovalTable() {
  const [couriers, setCouriers] = useState([]);
  const [modalType, setModalType] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    axios.get("http://34.16.66.175:8031/api/courier")
      .then(response => {
        if (response.data.success) {
          setCouriers(response.data.data.Courier.data);
        }
      })
      .catch(error => {
        console.error("Error fetching courier data:", error);
      });
  }, []);

  const handleApprovalClick = () => {
    setModalType("approval");
    setIsModalOpen(true);
  };

  const handleRejectClick = () => {
    setModalType("reject");
    setIsModalOpen(true);
  };

  const handleViewImageClick = (url) => {
    setImageUrl(url);
    setIsImageModalOpen(true);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <Table className="w-full text-sm text-left rtl:text-right text-black dark:text-black">
        <thead className="text-xs text-white uppercase" style={{ backgroundColor: '#42A444', borderBottom: '2px solid #42A444' }}>
          <tr>
            <th scope="col" className="px-6 py-3">Nama</th>
            <th scope="col" className="px-6 py-3">No Telepon</th>
            <th scope="col" className="px-6 py-3">TTL</th>
            <th scope="col" className="px-6 py-3">Alamat</th>
            <th scope="col" className="px-6 py-3">No Rekening</th>
            <th scope="col" className="px-6 py-3">KK</th>
            <th scope="col" className="px-6 py-3">KTP</th>
            <th scope="col" className="px-10 py-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {couriers.map((courier) => (
            <tr key={courier.courier_id} className="bg-white border-b border-grey hover:bg-green-100">
              <td className="py-2 px-4 border-b">{courier.name}</td>
              <td className="py-2 px-4 border-b">{courier.phone}</td>
              <td className="py-2 px-4 border-b">{courier.date_of_birth}</td>
              <td className="py-2 px-4 border-b">{courier.address}</td>
              <td className="py-2 px-4 border-b">{courier.account_number}</td>
              <td className="py-2 px-4 border-b text-center">
                <button 
                onClick={() => handleViewImageClick("https://media.licdn.com/dms/image/v2/D4E03AQHANo4jv-Uzyg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1666154152263?e=2147483647&v=beta&t=hMI8RIHcLSp_h2cwpg3sjv-smjPxUKEf1ZazdyDPv_E")}
                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                >
                  View
                </button>
              </td>
              <td className="py-2 px-4 border-b text-center">
                <button 
                onClick={() => handleViewImageClick("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR39Hw5ygS0El6mYpFLBqQjUkkbCgTTdIE1yA&s")}
                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                >
                  View
                </button>
              </td>
              <td className="py-2 px-4 border-b text-center flex items-center justify-center">
                <button
                  className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-green-700"
                  title="Ceklis (Approval)"
                  onClick={handleApprovalClick}
                >
                  <HiCheck size={20} />
                </button>
                <button
                  className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-700 ml-2"
                  title="Silang (Reject)"
                  onClick={handleRejectClick}
                >
                  <HiX size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {isModalOpen && modalType === "approval" && <CustomPopUp onClose={() => setIsModalOpen(false)} />}
      {isModalOpen && modalType === "reject" && <CustomPopUpReject onClose={() => setIsModalOpen(false)} />}
      {isImageModalOpen && <ImageModal url={imageUrl} onClose={() => setIsImageModalOpen(false)} />}
    </div>
  );
}
