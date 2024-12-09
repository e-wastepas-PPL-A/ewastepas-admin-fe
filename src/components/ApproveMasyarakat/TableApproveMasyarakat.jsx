import { HiUser, HiCheck, HiX } from "react-icons/hi";
import { Table } from "flowbite-react";
import { useState, useEffect } from "react";
import CustomPopUp from "./PopUpApprovalMasyarakat";
import CustomPopUpReject from "./PopUpRejectMasyarakat";
import '../../style/index.css';
import axios from "axios";

export default function CustomTable() {
  const [modalType, setModalType] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataMasyarakat, setDataMasyarakat] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMasyarakatId, setSelectedMasyarakatId] = useState(null);
  const itemsPerPage = 10;

  const fetchDataMasyarakat = async (page = 1) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`http://127.0.0.1:8000/api/community/?page=${page}`);
      if (response.data.success) {
        const communityData = response.data.data.Community.data;
  
        // Pertahankan status isRejected dari state sebelumnya
        setDataMasyarakat((prevData) =>
          communityData.map((item) => ({
            ...item,
            isRejected: prevData.find((prevItem) => prevItem.Community_id === item.Community_id)?.isRejected || false,
          }))
        );
  
        setTotalPages(Math.ceil(response.data.data.Community.total / itemsPerPage));
      } else {
        console.error("Gagal mengambil data masyarakat:", response.data.message);
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat mengambil data masyarakat:", error);
    } finally {
      setIsLoading(false);
    }
  };
  

  useEffect(() => {
    fetchDataMasyarakat(currentPage);
  }, [currentPage]);

  // Mendapatkan data yang akan ditampilkan pada halaman saat ini
  const currentData = dataMasyarakat;

  const handleApprovalClick = (masyarakatId) => {
    setModalType("approval");
    setIsModalOpen(true);
    setSelectedMasyarakatId(masyarakatId);
  };

  const fetchUpdatedData = () => {
    fetchDataMasyarakat(currentPage);
  };

  const handleRejectClick = (masyarakatId) => {
    setDataMasyarakat((prevData) =>
      prevData.map((masyarakat) =>
        masyarakat.Community_id === masyarakatId
          ? { ...masyarakat, isRejected: true }
          : masyarakat
      )
    );
    setModalType("reject");
    setIsModalOpen(true);
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

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg overflow-y-auto max-h-[500px]">
      <Table className="w-full text-sm text-left rtl:text-right text-black dark:text-black">
        <thead className="text-xs text-white uppercase" style={{ backgroundColor: '#42A444', borderBottom: '2px solid #42A444' }}>
          <tr>
            <th scope="col" className="px-6 py-2 text-center">Foto</th>
            <th scope="col" className="px-6 py-3">Nama Pelanggan</th>
            <th scope="col" className="px-6 py-3">No Telepon</th>
            <th scope="col" className="px-6 py-3">Alamat</th>
            <th scope="col" className="px-6 py-3">Tempat Tanggal Lahir</th>
            <th scope="col" className="px-10 py-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="8" className="text-center py-4">Loading...</td>
            </tr>
          ) : (
            currentData.map((masyarakat) => (
              <tr
                key={masyarakat.Community_id}
                className={`bg-white border-b ${masyarakat.isRejected ? "text-red-600" : "hover:bg-green-100"}`}
              >
                <td className="py-2 px-4 border-b text-center">
                  {masyarakat.photo ? (
                    <img
                      src={masyarakat.photo}
                      alt="Foto"
                      className="w-10 h-10 rounded-full inline-block"
                    />
                  ) : (
                    <HiUser className="inline-block text-gray-600" size={40} />
                  )}
                </td>
                <td className="py-2 px-4 border-b">{masyarakat.name}</td>
                <td className="py-2 px-4 border-b">{masyarakat.phone}</td>
                <td className="py-2 px-4 border-b">{masyarakat.address}</td>
                <td className="py-2 px-4 border-b">
                  {masyarakat.date_of_birth
                    ? new Date(masyarakat.date_of_birth).toLocaleDateString("id-ID")
                    : "-"}
                </td>
                <td className="py-2 px-4 border-b text-center flex items-center justify-center">
                  <button
                    className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-green-700"
                    title="Ceklis (Approval)"
                    onClick={() => handleApprovalClick(masyarakat.Community_id)}
                  >
                    <HiCheck size={20} />
                  </button>
                  <button
                    className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-700 ml-2"
                    title="Silang (Reject)"
                    onClick={() => handleRejectClick(masyarakat.Community_id)}
                  >
                    <HiX size={20} />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>

        {/* <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="8" className="text-center py-4">Loading...</td>
            </tr>
          ) : (
            currentData.map((masyarakat) => (
              <tr
                key={masyarakat.Community_id}
                className="bg-white border-b border-grey hover:bg-green-100"
                // className={`bg-white border-b border-grey ${masyarakat.isRejected ? "text-red-600" : "hover:bg-green-100"}`}
              >
                <td className="py-2 px-4 border-b text-center">
                  {masyarakat.photo ? (
                    <img
                      src={
                        masyarakat.photo ||
                        "https://media.licdn.com/dms/image/v2/D4E03AQHANo4jv-Uzyg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1666154152263?e=2147483647&v=beta&t=hMI8RIHcLSp_h2cwpg3sjv-smjPxUKEf1ZazdyDPv_E"
                      }
                      alt="Foto"
                      className="w-10 h-10 rounded-full inline-block"
                    />
                  ) : (
                    <HiUser className="inline-block text-gray-600" size={40} />
                  )}
                </td>
                <td
                  className={`py-2 px-4 border-b ${
                    masyarakat.isRejected ? "text-red-600" : ""
                  }`}
                >
                  {masyarakat.name}
                </td>
                <td
                  className={`py-2 px-4 border-b ${
                    masyarakat.isRejected ? "text-red-600" : ""
                  }`}
                >
                  {masyarakat.phone}
                </td>
                <td
                  className={`py-2 px-4 border-b ${
                    masyarakat.isRejected ? "text-red-600" : ""
                  }`}
                >
                  {masyarakat.address}
                </td>
                <td
                  className={`py-2 px-4 border-b ${
                    masyarakat.isRejected ? "text-red-600" : ""
                  }`}
                >
                  {masyarakat.date_of_birth
                    ? new Date(masyarakat.date_of_birth).toLocaleDateString("id-ID")
                    : "-"}
                </td>
                <td className="py-2 px-4 border-b text-center flex items-center justify-center">
                  <button
                    className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-green-700"
                    title="Ceklis (Approval)"
                    onClick={() => handleApprovalClick(masyarakat.Community_id)}
                  >
                    <HiCheck size={20} />
                  </button>
                  <button
                    className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-700 ml-2"
                    title="Silang (Reject)"
                    onClick={() => handleRejectClick(masyarakat.Community_id)}
                  >
                    <HiX size={20} />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody> */}
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
        masyarakatId={selectedMasyarakatId}
        onSuccess={fetchUpdatedData}
      />
      )}
      {isModalOpen && modalType === "reject" && <CustomPopUpReject onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}