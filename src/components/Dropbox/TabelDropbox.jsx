"use client";

import { HiPencil, HiTrash } from "react-icons/hi";
import { Table } from "flowbite-react";
import { useState, useEffect } from "react";
import axios from "axios";
import PopUpDelete from "./PopUpDeleteDropbox"

export default function CustomTable() {
  const [modalType, setModalType] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataDropbox, setDataDropbox] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDropboxId, setSelectedDropboxId] = useState(null);
  const itemsPerPage = 10;

  const fetchDataDropbox = async (page = 1) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`http://127.0.0.1:8000/api/dropbox/?page=${page}`);
      if (response.data.success) {
        // Ubah objek Community menjadi array
        const dropboxData = response.data.data.dropbox.data;
        // const formattedData = Object.values(communityData); // Konversi objek ke array
  
        setDataDropbox(dropboxData);
        setTotalPages(Math.ceil(response.data.data.Dropbox.total / itemsPerPage)); // Sesuaikan jika ada informasi total
      } else {
        console.error("Gagal mengambil data dropbox:", response.data.message);
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat mengambil data dropbox:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDataDropbox(currentPage);
  }, [currentPage]);

  const handleDelete = (dropboxId) => {
    setModalType("delete");
    setIsModalOpen(true);
    setSelectedDropboxId(dropboxId);
  };

  const fetchUpdatedData = () => {
    fetchDataDropbox(currentPage);
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
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <Table className="w-full text-sm text-left text-gray-900">
          <thead className="text-xs text-white uppercase" style={{ backgroundColor: '#42A444', borderBottom: '2px solid #42A444' }}>
            <tr>
              <th scope="col" className="px-4 py-2">
                <input type="checkbox" />
              </th>
              <th scope="col" className="px-6 py-3">Nama Dropbox</th>
              <th scope="col" className="px-6 py-3">Alamat</th>
              <th scope="col" className="px-6 py-3">Kuantitas</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
          {isLoading ? (
              <tr>
                <td colSpan="4" className="text-center py-4">Loading...</td>
              </tr>
            ) : (
              dataDropbox.map((dropbox, index) => (
              <tr key={index} className="bg-white border-b hover:bg-green-100">
                <td className="py-2 px-4 text-center">
                  <input type="checkbox" />
                </td>
                <td className="py-2 px-4">{dropbox.name}</td>
                <td className="py-2 px-4">{dropbox.address}</td>
                <td className="py-2 px-4">{dropbox.capacity}/100</td>
                <td className="py-2 px-4">{dropbox.status}</td>
                <td className="py-2 px-4 text-center flex items-center justify-center space-x-2">
                  <button
                    className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-green-700"
                    title="Edit"
                  >
                    <HiPencil size={20} />
                  </button>
                  <button
                    onClick={() =>
                      handleDelete(dropbox.dropbox_id)
                    }
                    className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-700"
                    title="Delete"
                  >
                    <HiTrash size={20} />
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

        {/* PopUpDelete */}
        {isModalOpen && modalType === "delete" && (
          <PopUpDelete
            onClose={() => setIsModalOpen(false)}
            dropboxId={selectedDropboxId}
            onSuccess={fetchUpdatedData}
          />
        )}
      </div>
  );
}
