import { HiUser, HiCheck, HiX, HiEye } from "react-icons/hi";
import { Table } from "flowbite-react";
import { useState, useEffect } from "react";
import CustomPopUp from "./PopUpApprovalKurir";
import { Modal, Button } from "flowbite-react";
import CustomPopUpReject from "./PopUpRejectKurir";
import axios from "axios";

function ImageModal({ url, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Kartu Keluarga</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-red-500">
            ✕
          </button>
        </div>
        <div className="p-4">
          <img src={url} alt="KTP/KK" className="w-full h-auto rounded-md" />
        </div>
        {/* <div className="flex p-4 border-t">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => alert("Fitur Cetak PDF belum diimplementasikan.")}
          >
            Cetak PDF
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default function CourierApprovalTable() {
  const [modalType, setModalType] = useState(null);
  const [dataKurir, setDataKurir] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("")
  const [modalHeader, setModalHeader] = useState("");
  const [selectedCourierId, setSelectedCourierId] = useState(null);
  const [rejectedCourier, setRejectedCourier] = useState([]);
  const itemsPerPage = 10;

  const fetchDataKurir = async (page = 1) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`http://34.16.66.175:8031/api/courier/?page=${page}`);
      if (response.data.success) {
        // const courierData = response.data.data.Courier.data;
        const courierData = response.data.data.Courier.data.filter(
          (courier) => courier.status === "Pending" || courier.status === "Reject"
        );
        
        setDataKurir(courierData);
        setTotalPages(Math.ceil(response.data.data.Courier.total / itemsPerPage));
      } else {
        console.error("Gagal mengambil data kurir:", response.data.message);
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat mengambil data kurir:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDataKurir(currentPage);
  }, [currentPage]);

  const currentData = dataKurir;

  const handleApprovalClick = (courierId) => {
    setModalType("approval");
    setIsModalOpen(true);
    setSelectedCourierId(courierId)
  };

  const fetchUpdatedData = () => {
    fetchDataKurir(currentPage);
  };

  const handleRejectClick = (courierId) => {
    setModalType("reject");
    setIsModalOpen(true);
    setSelectedCourierId(courierId)
    setRejectedCourier((prev) => [...prev, courierId]);
  };

  const handleViewImageClick = (type, url) => {
    setModalHeader(type);
    setImageUrl(url);
    setIsImageModalOpen(true);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg overflow-y-auto max-h-[500px]">
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
          {isLoading ? (
            <tr>
              <td colSpan="8" className="text-center py-4">Loading...</td>
            </tr>
          ) : (
            dataKurir.map((courier) => (
              <tr
                key={courier.courier_id}
                className={`bg-white border-b border-grey hover:bg-green-100 ${
                  rejectedCourier.includes(courier.courier_id) ? "text-red-500" : ""
                }`}
              >
                <td className="py-2 px-4 border-b max-w-[200px] overflow-x-auto" >{courier.name}</td>
                <td className="py-2 px-4 border-b max-w-[100px] overflow-x-auto">{courier.phone}</td>
                <td className="py-2 px-4 border-b max-w-[100px] overflow-x-auto">{courier.date_of_birth}</td>
                {/* <td
                  className="py-2 px-4 border-b break-words max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap"
                  title={courier.address}
                >
                  {courier.address}
                </td> */}
                <td className="py-2 px-4 border-b max-w-[200px] overflow-x-auto">
                  {courier.address}
                </td>
                <td className="py-2 px-4 border-b max-w-[200px] overflow-x-auto">{courier.account_number}</td>
                <td className="py-2 px-4 border-b text-center">
                  <button
                    onClick={() => handleViewImageClick("Kartu Keluarga", courier.kk_url || "https://media.licdn.com/dms/image/v2/D4E03AQHANo4jv-Uzyg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1666154152263?e=2147483647&v=beta&t=hMI8RIHcLSp_h2cwpg3sjv-smjPxUKEf1ZazdyDPv_E")}
                    className="text-blue-500 hover:text-blue-600 p-0 m-0 bg-transparent border-none"
                  >
                    <HiEye size={24} />
                  </button>
                </td>
                <td className="py-2 px-4 border-b text-center">
                  <button
                    onClick={() => handleViewImageClick("KTP", courier.ktp_url || "https://media.licdn.com/dms/image/v2/D4E03AQHANo4jv-Uzyg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1666154152263?e=2147483647&v=beta&t=hMI8RIHcLSp_h2cwpg3sjv-smjPxUKEf1ZazdyDPv_E")}
                    className="text-blue-500 hover:text-blue-600 p-0 m-0 bg-transparent border-none"
                  >
                    <HiEye size={24} />
                  </button>
                </td>
                <td className="py-2 px-4 text-center flex items-center justify-center">
                  <button
                    className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-green-700"
                    title="Ceklis (Approval)"
                    onClick={() => handleApprovalClick(courier.courier_id)}
                  >
                    <HiCheck size={20} />
                  </button>
                  <button
                    className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-700 ml-2"
                    title="Silang (Reject)"
                    onClick={() => handleRejectClick(courier.courier_id)}
                  >
                    <HiX size={20} />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

      {/* Tombol Pagination */}
      <div className="flex justify-center mt-4">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-1 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-2 mx-1">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-1 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
          >
            Next
          </button>
      </div>

      {isModalOpen && modalType === "approval" && (
      <CustomPopUp
        onClose={() => setIsModalOpen(false)}
        courierId={selectedCourierId}
        onSuccess={fetchUpdatedData}
      />
      )}
      {isModalOpen && modalType === "reject" && (
      <CustomPopUpReject
        onClose={() => setIsModalOpen(false)}
        courierId={selectedCourierId}
        onSuccess={fetchUpdatedData}
      />
      )}
      {isImageModalOpen && (
        <Modal show={ImageModal} onClose={() => setIsImageModalOpen(false)}>
          <Modal.Header>{modalHeader}</Modal.Header>
          <Modal.Body>
            <img
              src={imageUrl}
              alt={modalHeader}
              className="w-full h-auto rounded-lg"
            />
          </Modal.Body>
          <Modal.Footer>
            {/* <div className="flex p-4 border-t">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => alert("Fitur Cetak PDF belum diimplementasikan.")}
              >
                Cetak PDF
              </button>
            </div> */}
            {/* <Button onClick={onClose={() => setIsImageModalOpen(false)}}>Close</Button> */}
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}
